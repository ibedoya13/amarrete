import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

/**
 * GET /api/download-cv
 *
 * Sirve el CV en PDF desde el bucket de Cloudflare R2 como descarga.
 * El archivo nunca queda expuesto como recurso público: solo se accede
 * vía binding (`BUCKET_STATIC`) dentro del Worker.
 */

const R2_KEY = "docs/curriculum-ldbr.pdf";
const DOWNLOAD_FILENAME = "curriculum-ldbr.pdf";

export const GET: APIRoute = async () => {
  const bucket = env.BUCKET_STATIC;

  if (!bucket) {
    return new Response("Object storage not configured", { status: 500 });
  }

  const object = await bucket.get(R2_KEY);

  if (!object) {
    return new Response("CV not found", { status: 404 });
  }

  return new Response(object.body as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${DOWNLOAD_FILENAME}"`,
      "Cache-Control": "private, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
};
