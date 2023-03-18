import './index.css';

import * as GuiDOM from '@gui/dom';
import { App } from './App';
import { globalStateManager } from '@gui/core';

const manager = globalStateManager();
const { state: globalState } = manager;

console.log('initial global state', globalState);

GuiDOM.mount(
  App,
  document.querySelector('#app') as HTMLElement,
);

manager.subscribe(() => {
  console.log('update global state', globalState);
});
