import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import singleSpa from "vite-plugin-single-spa";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    singleSpa({
      type: "root",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "index.html",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    target: "esnext",
    minify: mode === "production",
    rollupOptions: {
      input: "src/root.ts",
      output: {
        format: "system",
        entryFileNames: "root.js",
      },
    },
  },
  resolve: {
    alias: {
      "@shared/tolgee": "/src/i18n/tolgeeInstance.ts",
    },
  },
}));
