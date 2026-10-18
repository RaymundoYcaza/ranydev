// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ranydev.com",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
