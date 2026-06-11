import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        crawlLinks: true,
      },
    },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
  },
});
