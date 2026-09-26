// Keeps the screenshots of projects with a live link in step with the sites: opens each one in
// Chrome and replaces its screenshot when the page looks different. Runs every morning in
// .github/workflows/screenshots.yml, or locally with `npm run screenshots` (needs Google Chrome).
import { readFile, writeFile } from "node:fs/promises";
import { registerHooks } from "node:module";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import sharp from "sharp";

// The projects come from the site's own list. Node runs its TypeScript as is but can't load the
// screenshot imports, so each import stands in for the path of its file, which needn't exist yet.
registerHooks({
  resolve: (specifier, context, nextResolve) =>
    specifier.endsWith(".webp")
      ? { url: new URL(specifier, context.parentURL).href, shortCircuit: true }
      : nextResolve(specifier, context),
  load: (url, context, nextLoad) =>
    url.endsWith(".webp")
      ? { format: "module", source: `export default ${JSON.stringify(fileURLToPath(url))};`, shortCircuit: true }
      : nextLoad(url, url.endsWith(".ts") ? { ...context, format: "module-typescript" } : context),
});
const { PROJECTS } = await import("../src/constants/index.ts");

// A 2:1 desktop window, the shape of the preview frame.
const VIEWPORT = { width: 1920, height: 960 };
// How far a channel (0-255) can drift before a pixel counts as changed: more than compression
// noise and anti-aliasing, less than any real edge.
const PIXEL_TOLERANCE = 32;
// A screenshot is only replaced when more of it than this changed, so a clock or a date on the
// page doesn't make a new commit every day: on nodrift, any two days differ by under 1%, while
// recolouring its main button changes about 4%.
const MIN_CHANGE = 0.015;
// If one of these fails, the page doesn't look as it should.
const NEEDED = new Set(["stylesheet", "script", "font", "image"]);

const browser = await chromium.launch({ channel: "chrome" });

for (const { title, live, image, capture } of PROJECTS.filter((project) => project.live && project.capture !== false)) {
  try {
    const attempt = () => screenshot(live, capture);
    const png = await attempt().catch((error) => {
      console.warn(`${title}: ${error.message}, trying again`);
      return attempt();
    });
    const webp = await sharp(png).webp({ quality: 80, effort: 6 }).toBuffer();
    const change = await difference(webp, image);
    const updated = change > MIN_CHANGE;
    if (updated) await writeFile(image, webp);
    console.log(`${title}: ${updated ? "updated" : "no visible change"} (${(change * 100).toFixed(2)}% differs)`);
  } catch (error) {
    console.error(`${title}: ${error.message}`);
    process.exitCode = 1;
  }
}

await browser.close();

async function screenshot(url, { colorScheme = "light", wake, localStorage, waitFor } = {}) {
  if (wake) await wakeUp(wake);
  // Dhaka time, so clocks on the page read as they do for the owner.
  const context = await browser.newContext({ viewport: VIEWPORT, colorScheme, timezoneId: "Asia/Dhaka" });
  try {
    if (localStorage) await context.addInitScript(seed, localStorage);
    const page = await context.newPage();
    const failed = [];
    const check = (request) => NEEDED.has(request.resourceType()) && failed.push(request.url());
    // An abort is the page's own doing, like a prefetch it no longer needs.
    page.on("requestfailed", (request) => request.failure()?.errorText !== "net::ERR_ABORTED" && check(request));
    page.on("response", (response) => response.status() >= 400 && check(response.request()));
    const response = await page.goto(url, { timeout: 90_000 });
    if (!response?.ok()) throw new Error(`${url} answered ${response?.status()}`);
    // Some pages never go fully quiet, so this is only a head start.
    await page.waitForLoadState("networkidle", { timeout: 30_000 }).catch(() => {});
    // Without it the page isn't worth showing, like a feed with no posts yet.
    if (waitFor) {
      await page.waitForSelector(waitFor, { timeout: 30_000 }).catch(() => {
        throw new Error(`the page never showed ${waitFor}`);
      });
    }
    // Waits for web fonts. Entrances and fades are skipped to their end, and loops (a pulse, a
    // floating icon) are shown at their start, so the same page gives the same picture.
    const png = await page.screenshot({ animations: "disabled" });
    if (failed.length) throw new Error(`these didn't load: ${failed.join(", ")}`);
    return png;
  } finally {
    await context.close();
  }
}

// Free hosts put idle servers to sleep, and waking one can take a minute.
async function wakeUp(url) {
  for (let tries = 1; ; tries++) {
    const status = await fetch(url, { signal: AbortSignal.timeout(90_000) }).then(
      (response) => response.status,
      () => 0,
    );
    if (status >= 200 && status < 300) return;
    if (tries === 3) throw new Error(`${url} did not wake up (${status || "no response"})`);
    await new Promise((resolve) => setTimeout(resolve, 10_000));
  }
}

// Runs in the page before its own scripts.
function seed(entries) {
  try {
    for (const [key, value] of Object.entries(entries)) {
      localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    }
  } catch {
    // A frame without storage of its own, such as about:blank.
  }
}

// The share of pixels that visibly differ from the screenshot on disk: 1 when there's none yet
// or its size doesn't match.
async function difference(webp, file) {
  const pixels = (input) => sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  // Read into memory first: sharp keeps files it opens locked on Windows, so writing the new one would fail.
  const [next, prev] = await Promise.all([pixels(webp), readFile(file).then(pixels).catch(() => null)]);
  if (prev?.info.width !== next.info.width || prev.info.height !== next.info.height) return 1;
  let changed = 0;
  for (let i = 0; i < next.data.length; i += 3) {
    if (
      Math.abs(next.data[i] - prev.data[i]) > PIXEL_TOLERANCE ||
      Math.abs(next.data[i + 1] - prev.data[i + 1]) > PIXEL_TOLERANCE ||
      Math.abs(next.data[i + 2] - prev.data[i + 2]) > PIXEL_TOLERANCE
    ) {
      changed++;
    }
  }
  return changed / (next.info.width * next.info.height);
}
