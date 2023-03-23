import type { ESBuildOptions, Plugin, UserConfig } from 'vite';
import type { IOptions } from '../types';

export const plugin = ({
  injectGui = true,
}: Partial<IOptions>): Plugin => {
  return {
    name: 'vite:gui-plugin',
    config() {
      let config: UserConfig = {
        esbuild: {
          jsx: 'transform',
          jsxFactory: 'Gui.createElement',
          jsxFragment: 'Gui.Fragment',
        }
      }

      if (injectGui) {
        (config.esbuild as ESBuildOptions).jsxInject = `import * as Gui from '@gui-framework/core'\n`;
      }

      return config;
    }
  }
}
