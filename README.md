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
    │   ├── CodePanel.astro  # Panel de "archivo" abierto (código con números de línea)
    │   ├── Explorer.astro   # Barra lateral con las secciones como archivos
    │   └── StatusBar.astro  # Barra de estado inferior del editor
    ├── layouts/
    │   └── Layout.astro     # Carga WebTUI y el tema Catppuccin
    ├── pages/
    │   └── index.astro      # Página principal (CV como editor de código)
    └── styles/
        └── editor.css       # Estilos del editor (shell, código, tokens de sintaxis)
```

La página única se comporta como una SPA: la barra lateral (derecha) lista las
secciones como archivos (`sobre-mi.ts`, `experiencia.ts`, …) y, al hacer clic, se
abren en el editor central como código con resaltado de sintaxis. La barra de
estado inferior hace de footer. La navegación usa hash (`#sobre-mi.ts`) y
transiciones de vista.

## ✏️ Personalizar el contenido

Los datos del CV (perfil, experiencia, habilidades, proyectos y contacto) son de
ejemplo y viven en el frontmatter de
[`src/pages/index.astro`](./src/pages/index.astro). Edítalos con tu información real.

### Cambiar el tema

El tema Catppuccin se define en [`src/layouts/Layout.astro`](./src/layouts/Layout.astro) mediante el atributo `data-webtui-theme`. Variantes disponibles:

- `catppuccin-mocha` (oscuro, por defecto)
- `catppuccin-macchiato` (oscuro)
- `catppuccin-frappe` (oscuro claro)
- `catppuccin-latte` (claro)

## 📚 Documentación

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de WebTUI](https://webtui.ironclad.sh)
