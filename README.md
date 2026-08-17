# amarrete

Sitio personal tipo CV construido con [Astro](https://astro.build) y [WebTUI](https://webtui.ironclad.sh), una librería CSS modular que trae la estética de las terminales TUI al navegador.

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando             | Acción                                               |
| :------------------ | :--------------------------------------------------- |
| `npm install`       | Instala las dependencias                             |
| `npm run dev`       | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`     | Compila el sitio de producción en `./dist/`          |
| `npm run preview`   | Previsualiza la build localmente                     |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro                  |
| `npm run deploy`    | Publica el sitio en Cloudflare Pages (Wrangler)      |

## 🧩 Estructura del proyecto

```text
/
├── public/
│   └── favicon.ico
└── src/
    ├── components/          # Componentes reutilizables
    │   ├── Profile.astro
    │   ├── Section.astro
    │   ├── Skills.astro
    │   ├── Experience.astro
    │   ├── Projects.astro
    │   ├── Education.astro
    │   └── Footer.astro
    ├── layouts/
    │   └── Layout.astro     # Carga WebTUI y el tema Catppuccin
    └── pages/
        └── index.astro      # Página principal (CV)
```

## ✏️ Personalizar el contenido

Los datos del CV (nombre, experiencia, skills, proyectos, educación) son de ejemplo y viven en [`src/pages/index.astro`](./src/pages/index.astro). Edítalos con tu información real.

### Cambiar el tema

El tema Catppuccin se define en [`src/layouts/Layout.astro`](./src/layouts/Layout.astro) mediante el atributo `data-webtui-theme`. Variantes disponibles:

- `catppuccin-mocha` (oscuro, por defecto)
- `catppuccin-macchiato` (oscuro)
- `catppuccin-frappe` (oscuro claro)
- `catppuccin-latte` (claro)

## 📚 Documentación

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de WebTUI](https://webtui.ironclad.sh)
