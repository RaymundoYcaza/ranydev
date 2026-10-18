---
title: "RanyDev — Sitio personal"
description: "Este mismo sitio: blog y portafolio construidos con Astro 7, Tailwind 4 y un theme propio empaquetado."
tech: ["Astro", "Tailwind CSS", "TypeScript", "MDX"]
repo: "https://github.com/RaymundoYcaza/ranydev"
pubDate: 2026-10-18
---

Sitio personal que combina un blog técnico y un portafolio de proyectos.

## Decisiones técnicas

- **Astro 7** para renderizado estático con islands cuando haga falta.
- **Tailwind 4** vía `@tailwindcss/vite`, con tokens en `@theme`.
- **Content Collections** con schemas Zod para `blog` y `projects`.
- **Monorepo** con npm workspaces: el theme es un paquete reutilizable.

## Estructura

El sitio consume `@ranydev/theme`, que exporta el layout base, la navegación,
el SEO y las tarjetas de posts y proyectos. El contenido vive en
`src/content` y se consulta con `getCollection`.
