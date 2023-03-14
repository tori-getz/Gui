import { globalStateManager } from '@gui/core';
import { start } from './component';

const manager = globalStateManager();
const { state } = manager;

let iteration: number = 0;

console.log(iteration, 'initial global state', state);
iteration++;

start();

manager.subscribe(() => {
  console.log(iteration, 'update global state', state);
  iteration++; 
});
