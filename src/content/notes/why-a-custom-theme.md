---
title: "Why I built my own theme"
description: "The limits of using someone else's theme, and what I gain by packaging my own design system."
pubDate: 2026-10-12
tags: ["design", "architecture"]
---

Using a third-party theme gets you shipping fast, but it ends up encoding
design decisions that aren't yours. When I migrated to Astro, I decided to
build my own.

## The cost of borrowing

A theme like PaperMod or LoveIt imposes:

1. **A content structure** that doesn't always fit what you publish.
2. **Styles that are hard to tweak** without forking the whole project.
3. **A dependency on external maintenance** for every improvement.

## The alternative: your own package

The theme lives in `packages/theme` as an npm workspace. That means:

- Components import as `@ranydev/theme` on any site.
- Design tokens are defined once with Tailwind 4's `@theme`.
- Content stays in the site, not the theme — so the theme stays reusable.

```
import { BaseLayout, PostCard } from "@ranydev/theme";
```

## What I prioritized

- **One typeface with a voice**: Geist for everything, Geist Mono for code
  and labels — a clean, utilitarian stack.
- **Pure monochrome**: near-black ink on a near-white surface, no chromatic
  accent, contrast doing the work.
- **Accessibility**: visible focus, real contrast, and
  `prefers-reduced-motion`.

The result is a theme that feels like mine and that I can evolve without
asking anyone's permission.
