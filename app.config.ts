import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from 'vite-tsconfig-paths'

import { cloudflare } from "unenv";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    unenv: cloudflare,
    // rollupConfig: {
    //   external: ["node:async_hooks"],
    // },
  },
  vite: {
    plugins: [tsConfigPaths({
            projects: ['./tsconfig.json'],
          })]
  }
});
