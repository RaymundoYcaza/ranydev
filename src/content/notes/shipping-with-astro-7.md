---
title: "Shipping this site with Astro 7"
description: "Why I rebuilt ranydev on Astro 7 with a custom theme packaged as its own workspace."
pubDate: 2026-10-18
tags: ["astro", "web"]
---

This site started as a Hugo blog running someone else's theme. Today it's
rebuilt from scratch on **Astro 7** with a custom theme packaged as
`@ranydev/theme`.

## Why the move

Hugo is fast and mature, but I wanted full control over the design and a
reusable home for my components. Astro gives me that without giving up
static rendering:

- `.astro` components with zero client JS by default.
- Content Collections with typed schemas for notes and work.
- A theme package I can share across sites.

## How it's structured

```
packages/theme/   → layouts, components, design tokens
src/content/      → notes and work (MD/MDX)
src/pages/        → site routes
```

The theme exports `BaseLayout`, `Header`, `Footer`, and the cards. Color and
type tokens live in the package, so any site that consumes it inherits the
identity without duplicating CSS.

```css
@theme {
  --color-ink: #0a0a0a;
  --color-bg: #fafafa;
}
```

Up next: a deeper dive into the theme design and the Tailwind 4 decisions
that make it work in a monorepo.
