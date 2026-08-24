#!/usr/bin/env bash
#
# upload-cv.sh — Sube los PDFs del CV a Cloudflare R2.
#
# Carga los archivos de ./static a docs/ en el bucket definido
# en wrangler.jsonc (binding BUCKET_STATIC).
#
# Uso:
#   ./scripts/upload-cv.sh            # sube ambos archivos (es y en)
#   ./scripts/upload-cv.sh es         # solo la versión en español
#   ./scripts/upload-cv.sh en         # solo la versión en inglés
#
# Requiere: sesión activa de Wrangler (`npx wrangler login`).

set -euo pipefail

BUCKET="personal-amarrete-prod-static"
STATIC_DIR="$(cd "$(dirname "$0")/.." && pwd)/static"

upload() {
  local lang="$1"
  local file="curriculum-ldbr-${lang}.pdf"

  if [[ ! -f "${STATIC_DIR}/${file}" ]]; then
    echo "✗ No existe ${STATIC_DIR}/${file}" >&2
    exit 1
  fi

  echo "→ Subiendo ${file} a ${BUCKET}/docs/${file} ..."
  npx wrangler r2 object put "${BUCKET}/docs/${file}" \
    --file "${STATIC_DIR}/${file}" \
    --remote \
    --content-type "application/pdf"
}

case "${1:-all}" in
  all)
    upload es
    upload en
    ;;
  es | en)
    upload "$1"
    ;;
  *)
    echo "Uso: $0 [all|es|en]" >&2
    exit 1
    ;;
esac

echo "✓ Listo."
