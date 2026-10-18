# RanyDev

Sitio personal construido con Astro 7 y un theme propio como paquete npm workspace.

## Desarrollo

```sh
npm install
npm run dev
npm run check
npm run build
```

## Estructura

```text
packages/theme/   Theme reutilizable: layout, componentes y tokens visuales
src/content/      Posts y proyectos Markdown/MDX
src/pages/        Rutas del sitio y feed RSS
src/styles/       Tailwind CSS 4 y estilos del contenido
```

El sitio importa los componentes desde `@ranydev/theme`. El contenido pertenece al sitio y se valida mediante Content Collections en `src/content.config.ts`.

## Añadir contenido

Crear archivos `.md` o `.mdx` en `src/content/blog/` o `src/content/projects/`. Cada colección valida el frontmatter con su schema. Los campos disponibles están definidos en `src/content.config.ts`.

Los textos y proyectos actuales son contenido inicial de ejemplo; reemplázalos con información real antes de publicar.
