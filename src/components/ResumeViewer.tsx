"use client";

import type { PDFDocumentProxy, RenderTask } from "pdfjs-dist";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiAlertCircle, FiDownload, FiExternalLink, FiX } from "react-icons/fi";
import { NAME, RESUME_FILENAME, RESUME_PDF, RESUME_URL } from "../constants";

type PdfLink = { href: string; label: string; box: React.CSSProperties };
type PdfPage = { width: number; height: number; links: PdfLink[] };
type Resume = { pdf: PDFDocumentProxy; pages: PdfPage[] };

const describe = (url: string) =>
  url.startsWith("mailto:")
    ? `Email ${url.slice(7)}`
    : url.replace(/^https?:\/\/(www\.)?/, "").replace(/[?#].*$/, "").replace(/\/$/, "");

let loading: Promise<Resume> | null = null;

// pdf.js and the CV are only fetched once someone reaches for the CV (hover,
// touch or click), never as part of the page load.
const loadResume = () => {
  loading ??= (async () => {
    const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
    pdfjs.GlobalWorkerOptions.workerPort ??= new Worker(
      new URL("pdfjs-dist/legacy/build/pdf.worker.min.mjs", import.meta.url),
      { type: "module" }
    );
    const pdf = await pdfjs.getDocument({ url: RESUME_PDF, useWasm: false }).promise;
    const pages = await Promise.all(
      Array.from({ length: pdf.numPages }, async (_, i) => {
        const page = await pdf.getPage(i + 1);
        const viewport = page.getViewport({ scale: 1 });
        const annotations = await page.getAnnotations();
        // Links become real anchors laid over the canvas, positioned in
        // percentages so they track the page at any size.
        const links = annotations
          .filter((a) => a.subtype === "Link" && typeof a.url === "string")
          .map((a): PdfLink => {
            const [x1, y1] = viewport.convertToViewportPoint(a.rect[0], a.rect[1]);
            const [x2, y2] = viewport.convertToViewportPoint(a.rect[2], a.rect[3]);
            return {
              href: a.url,
              label: describe(a.url),
              box: {
                left: `${(Math.min(x1, x2) / viewport.width) * 100}%`,
                top: `${(Math.min(y1, y2) / viewport.height) * 100}%`,
                width: `${(Math.abs(x2 - x1) / viewport.width) * 100}%`,
                height: `${(Math.abs(y2 - y1) / viewport.height) * 100}%`,
              },
            };
          });
        return { width: viewport.width, height: viewport.height, links };
      })
    );
    return { pdf, pages };
  })().catch((error) => {
    loading = null;
    throw error;
  });
  return loading;
};

type PageProps = { pdf: PDFDocumentProxy; index: number; page: PdfPage; width: number };

const Page = ({ pdf, index, page, width }: PageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [painted, setPainted] = useState(false);

  useEffect(() => {
    if (!width) return;
    let task: RenderTask | undefined;
    let cancelled = false;

    (async () => {
      const pdfPage = await pdf.getPage(index + 1);
      if (cancelled) return;
      // Match the screen's pixel density so text stays sharp, within a sane canvas size.
      const scale = Math.min((width * Math.min(window.devicePixelRatio, 3)) / page.width, 2400 / page.width);
      const viewport = pdfPage.getViewport({ scale });
      // Draw off screen and copy it over, so a resize never flashes a blank page.
      const buffer = document.createElement("canvas");
      buffer.width = Math.round(viewport.width);
      buffer.height = Math.round(viewport.height);
      task = pdfPage.render({ canvas: buffer, viewport });
      await task.promise;

      const canvas = canvasRef.current;
      if (cancelled || !canvas) return;
      canvas.width = buffer.width;
      canvas.height = buffer.height;
      canvas.getContext("2d")?.drawImage(buffer, 0, 0);
      setPainted(true);
    })().catch(() => {
      // Superseded by a newer render.
    });

    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [pdf, index, page.width, width]);

  return (
    <div
      className="relative overflow-hidden rounded-sm bg-white shadow-(--page-shadow)"
      style={{ aspectRatio: `${page.width} / ${page.height}` }}
    >
      {!painted && <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-neutral-200" />}
      <canvas ref={canvasRef} role="img" aria-label={`CV page ${index + 1}`} className="block size-full" />
      {page.links.map((link, i) => {
        const external = /^https?:/.test(link.href);
        return (
          <a
            key={`${i}-${link.href}`}
            href={link.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            style={link.box}
            className="absolute rounded-xs transition-colors hover:bg-neutral-900/10 focus-visible:bg-neutral-900/10"
          />
        );
      })}
    </div>
  );
};

const iconButton =
  "flex size-10 shrink-0 items-center justify-center rounded-full text-lg text-fg-2 transition-colors hover:bg-fg-1/10 hover:text-fg-1";

const ResumeViewer = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const [resume, setResume] = useState<Resume | null>(null);
  const [failed, setFailed] = useState(false);
  const [width, setWidth] = useState(0);

  const load = useCallback(() => {
    setFailed(false);
    loadResume().then(setResume, () => setFailed(true));
  }, []);

  const close = () => dialogRef.current?.close();

  // Any [data-resume] link opens the viewer. Those links point at /cv.pdf, so
  // they still work before hydration, without JavaScript and with ctrl/cmd-click.
  useEffect(() => {
    const isTrigger = (event: Event) => (event.target as Element | null)?.closest?.("[data-resume]");

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !isTrigger(event)) return;
      event.preventDefault();
      dialogRef.current?.showModal();
      load();
    };
    const warmUp = (event: PointerEvent) => {
      if (isTrigger(event)) loadResume().catch(() => {});
    };

    document.addEventListener("click", onClick);
    document.addEventListener("pointerover", warmUp, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("pointerover", warmUp);
    };
  }, [load]);

  // Pages render at the column's width. The first measurement applies at once,
  // later ones wait for resizing to settle. A closed dialog measures 0 and is ignored.
  useEffect(() => {
    const el = pagesRef.current;
    if (!el) return;
    let current = 0;
    let timer: number | undefined;
    const observer = new ResizeObserver(([entry]) => {
      const next = Math.round(entry.contentRect.width);
      if (!next || next === current) return;
      window.clearTimeout(timer);
      const apply = () => {
        current = next;
        setWidth(next);
      };
      if (current) timer = window.setTimeout(apply, 200);
      else apply();
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cv-title"
      className="cv-dialog"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <header className="flex shrink-0 items-center gap-1 border-b border-fg-1/10 py-3 pr-3 pl-5 sm:gap-2 sm:pl-6">
        <div className="mr-2 min-w-0 grow">
          <h2 id="cv-title" className="truncate font-semibold tracking-tight text-fg-1">
            Curriculum Vitae
          </h2>
          <p className="truncate text-xs text-fg-3">{NAME}</p>
        </div>
        <a
          href={RESUME_PDF}
          download={RESUME_FILENAME}
          className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-btn px-3 text-sm font-medium text-btn-fg transition-colors hover:bg-btn-hover sm:px-4"
        >
          <FiDownload aria-hidden="true" className="size-4" />
          <span className="max-sm:sr-only">Download</span>
        </a>
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener"
          aria-label="Open in a new tab"
          title="Open in a new tab"
          className={iconButton}
        >
          <FiExternalLink aria-hidden="true" />
        </a>
        <button type="button" onClick={close} aria-label="Close" title="Close" className={iconButton}>
          <FiX aria-hidden="true" />
        </button>
      </header>

      <div className="grow overflow-y-auto overscroll-contain px-3 py-4 sm:p-6">
        <div ref={pagesRef} className="mx-auto max-w-4xl space-y-4 sm:space-y-6">
          {resume ? (
            resume.pages.map((page, index) => (
              <Page key={index} pdf={resume.pdf} index={index} page={page} width={width} />
            ))
          ) : failed ? (
            <div role="alert" className="flex flex-col items-center gap-4 py-24 text-center">
              <FiAlertCircle aria-hidden="true" className="size-8 text-fg-4" />
              <p className="text-sm text-fg-2">The CV couldn&apos;t be loaded here.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={load}
                  className="rounded-full bg-btn px-5 py-2.5 text-sm font-medium text-btn-fg transition-colors hover:bg-btn-hover"
                >
                  Try again
                </button>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full px-5 py-2.5 text-sm font-medium transition-[background-color,scale] duration-300 ease-spring hover:bg-glass-hover active:scale-96"
                >
                  Open in Google Drive
                </a>
              </div>
            </div>
          ) : (
            <div role="status" className="aspect-210/297 animate-pulse rounded-sm bg-fg-1/10">
              <span className="sr-only">Loading CV…</span>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default ResumeViewer;
