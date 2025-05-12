import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import singleSpa from "vite-plugin-single-spa";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    singleSpa({
      type: "root",
    }),
  ],
  build: {
    target: "esnext",
    minify: mode === "production",
    rollupOptions: {
      output: {
        format: "system",
        entryFileNames: "[name].js",
      },
    },
  },
  resolve: {
    alias: {
      "@shared/tolgee": "/src/i18n/tolgeeInstance.ts",
    },
  },
}));
