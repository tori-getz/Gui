import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  build: {
    rollupOptions: {
      watch: {
        include: [
          path.resolve(__dirname, '..', 'core'),
          path.resolve(__dirname, '..', 'dom'),
        ]
      },
      external: ["@gui/core", "@gui/dom"],
      output: {
        globals: {
          "@gui/core": "Gui",
          "@gui/dom": "GuiDOM",
        },
      },
    },
  },
  esbuild: {
    jsx: "transform",
    jsxFactory: "Gui.createElement",
    jsxFragment: "Gui.Fragment",
  },
});
