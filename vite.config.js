import { resolve } from "path";
import { defineConfig } from "vite";
import htmlPurge from 'vite-plugin-purgecss'

export default defineConfig({
    root: resolve(__dirname, "src/"),
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          home: resolve(__dirname, "src/index.html"),
          styleGuide: resolve(__dirname, "src/style-guide/index.html"),
        },
      },
    },
    plugins: [
        htmlPurge(),
    ]
})