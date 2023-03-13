import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, 'src'),
      }
    ],
  },
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'Gui.createElement',  
    jsxFragment: 'Gui.Fragment'
  },
});
