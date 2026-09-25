import { RESUME_DRIVE_ID, RESUME_FILENAME, RESUME_URL } from "../../constants";

// Serves the CV from Google Drive under the site's own domain. Drive sends no
// CORS headers, so the in-page viewer can't read it directly. The CDN caches
// the file for an hour and keeps serving the last copy while it refreshes.
export const dynamic = "force-dynamic";

const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_ID}`;

export async function GET() {
  try {
    const res = await fetch(DOWNLOAD_URL, { next: { revalidate: 3600 } });
    const pdf = await res.arrayBuffer();
    // A private or missing file comes back as a 200 HTML page, so check the bytes.
    const isPdf = res.ok && new TextDecoder().decode(pdf.slice(0, 5)) === "%PDF-";
    if (!isPdf) throw new Error(`Google Drive did not return a PDF (HTTP ${res.status})`);

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${RESUME_FILENAME}"`,
        "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Could not load the CV from Google Drive:", error);
    return new Response(null, {
      status: 307,
      headers: { Location: RESUME_URL, "Cache-Control": "no-store" },
    });
  }
}
