---
title: "The ranydev site"
description: "The site you're reading: notes and work built with Astro 7, Tailwind 4, and a custom theme in a monorepo."
kind: "tool"
status: "open-source"
tech: ["Astro", "Tailwind CSS", "TypeScript", "MDX"]
repo: "https://github.com/RaymundoYcaza/ranydev"
pubDate: 2026-10-18
---

The personal site for the lab. It publishes engineering notes and showcases
the work, while doubling as the testbed for my own theme.

## Technical decisions

- **Astro 7** for static rendering, with islands only where needed.
- **Tailwind 4** via `@tailwindcss/vite`, tokens defined in `@theme`.
- **Content Collections** with Zod schemas for `notes` and `work`.
- **Monorepo** with npm workspaces: the theme is a reusable package.

## Structure

The site consumes `@ranydev/theme`, which exports the base layout,
navigation, SEO, and the note/work cards. Content lives in `src/content` and
is queried with `getCollection`.
