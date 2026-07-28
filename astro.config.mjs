import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "static",

  site:
    process.env.SITE_URL ||
    "https://blog.rutesokin.monster",

  integrations: [
    mdx(),
    sitemap(),
  ],

  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },

  vite: {
    build: {
      target: "esnext",
    },
  },
});
