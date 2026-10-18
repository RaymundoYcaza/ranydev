---
title: "Hola mundo desde Astro 7"
description: "Por qué migré este sitio de Hugo a Astro 7 y construí mi propio theme desde cero."
pubDate: 2026-10-18
tags: ["astro", "web"]
---

Este sitio empezó como un blog de Hugo con themes ajenos. Hoy arranca de cero
con **Astro 7** y un theme propio empaquetado como `@ranydev/theme`.

## Por qué el cambio

Hugo es rápido y maduro, pero quería control total del diseño y una forma
reutilizable de mis componentes. Astro me da eso sin renunciar a la
estaticidad:

- Componentes `.astro` sin costo de JS en el cliente.
- Content Collections con schemas tipados para posts y proyectos.
- Un paquete de theme compartible entre sitios.

## Cómo quedó estructurado

```
packages/theme/   → layouts, componentes y tokens de diseño
src/content/      → posts y proyectos (MD/MDX)
src/pages/        → rutas del sitio
```

El theme exporta `BaseLayout`, `Header`, `Footer` y tarjetas. Los tokens de
color y tipografía viven en el paquete, así cualquier sitio que lo consuma
hereda la identidad visual sin duplicar CSS.

```css
@theme {
  --color-ink: #12141c;
  --color-amber: #e3a857;
}
```

En próximos artículos detallaré el diseño del theme y las decisiones de
Tailwind 4 en monorepos.
