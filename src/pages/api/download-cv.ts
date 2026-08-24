import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

/**
 * GET /api/download-cv
 *
 * Sirve el CV en PDF desde el bucket de Cloudflare R2 como descarga,
 * según el idioma preferido del usuario (cabecera `Accept-Language`):
 * - Español → `docs/curriculum-ldbr-es.pdf`
 * - Otro idioma → `docs/curriculum-ldbr-en.pdf`
 *
 * El archivo nunca queda expuesto como recurso público: solo se accede
 * vía binding (`BUCKET_STATIC`) dentro del Worker.
 */

const R2_KEY_PREFIX = "docs/curriculum-ldbr";
const R2_KEY_ES = `${R2_KEY_PREFIX}-es.pdf`;
const R2_KEY_EN = `${R2_KEY_PREFIX}-en.pdf`;

/** Devuelve la clave de R2 según el idioma preferido del cliente. */
function resolveKey(acceptLanguage: string | null): string {
  // Tomamos los rangos de idioma en orden de preferencia; si el primero
  // (más preferido) es español, servimos la versión en español.
  const preferred = acceptLanguage?.split(",")[0]?.trim().toLowerCase() ?? "";
  return preferred.startsWith("es") ? R2_KEY_ES : R2_KEY_EN;
}

export const GET: APIRoute = async ({ request }) => {
  const bucket = env.BUCKET_STATIC;

  if (!bucket) {
    return new Response("Object storage not configured", { status: 500 });
  }

  const key = resolveKey(request.headers.get("Accept-Language"));
  const object = await bucket.get(key);

  if (!object) {
    return new Response("CV not found", { status: 404 });
  }

  const filename = key.split("/").pop();

  return new Response(object.body as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, max-age=3600",
      "X-Content-Type-Options": "nosniff",
      Vary: "Accept-Language",
    },
  });
};
