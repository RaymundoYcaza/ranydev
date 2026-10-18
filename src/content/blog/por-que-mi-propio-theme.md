---
title: "Por qué construí mi propio theme"
description: "Las limitaciones de usar themes ajenos y lo que gano al empaquetar mi propio design system."
pubDate: 2026-10-12
tags: ["diseño", "arquitectura"]
---

Usar un theme de terceros resuelve el lanzamiento rápido, pero termina
codificando decisiones de diseño que no son tuyas. Al migrar a Astro decidí
construir el mío.

## El costo de lo ajeno

Un theme como PaperMod o LoveIt impone:

1. **Estructura de contenido** que no siempre se ajusta a lo que publicas.
2. **Estilos difíciles de tocar** sin forkear el proyecto entero.
3. **Dependencia de mantenimiento externo** para cada mejora.

## La alternativa: un paquete propio

El theme vive en `packages/theme` como un workspace de npm. Eso significa:

- Los componentes se importan como `@ranydev/theme` en cualquier sitio.
- Los tokens de diseño se definen una vez con `@theme` de Tailwind 4.
- El contenido queda en el sitio, no en el theme: el theme es reutilizable.

```ts
import { BaseLayout, PostCard } from "@ranydev/theme";
```

## Lo que prioricé

- **Tipografía con carácter**: Fraunces para títulos, IBM Plex para cuerpo y
  código.
- **Paleta propia**: tinta azul oscura con acento ámbar, lejos de los
  defaults genéricos.
- **Accesibilidad**: foco visible, contraste y `prefers-reduced-motion`.

El resultado es un theme que se siente mío y que puedo evolucionar sin pedir
permiso a nadie.
