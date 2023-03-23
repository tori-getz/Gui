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
      external: ["@gui-framework/core", "@gui-framework/dom"],
      output: {
        globals: {
          "@gui-framework/core": "Gui",
          "@gui-framework/dom": "GuiDOM",
        },
      },
    },
  },
  plugins: [gui({})]
});
