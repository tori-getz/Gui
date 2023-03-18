import path from "node:path";
import { defineConfig } from "vite";
import { gui } from '@gui/vite-plugin';

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
      external: ["@gui/core", "@gui/dom"],
      output: {
        globals: {
          "@gui/core": "Gui",
          "@gui/dom": "GuiDOM",
        },
      },
    },
  },
  plugins: [gui({})]
});
