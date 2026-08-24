// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // No usamos Astro.session; evita que el adaptador cree/binde un KV.
  session: false,
  output: "server",
  adapter: cloudflare({
    // Usa wrangler.jsonc de la raíz: habilita locals.runtime con los
    // bindings (BUCKET_STATIC) también en desarrollo.
    configPath: "wrangler.jsonc",
    // Conecta los bindings al bucket real de Cloudflare en `astro dev`.
    // Requiere sesión activa (`npx wrangler login`).
    remoteBindings: true,
  }),
});
