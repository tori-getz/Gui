import './index.css';

import * as GuiDOM from '@gui/dom';
import { App } from './App';

GuiDOM.render(
  App,
  document.querySelector('#app') as HTMLElement,
);
