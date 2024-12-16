// @ts-check
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  env: {
    schema: {
      WP_CONTENT_ENDPOINT: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
    },
  },
});
