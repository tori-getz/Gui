import './index.css';

import * as GuiDOM from '@gui-framework/dom';
import { App } from './App';

GuiDOM.mount(
  App,
  document.querySelector('#app') as HTMLElement,
);
