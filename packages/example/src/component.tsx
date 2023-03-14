import * as Gui from '@gui/core';
import * as GuiDOM from '@gui/dom';

const Counter: Gui.Component = () => {
  const [ counter, setCounter ] = Gui.state<number>(0);
  const [ greeting, setGreeting ] = Gui.state<string>('hello');

  return (
    <div>
      Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>
  )
}

export const start = () => {
  GuiDOM.render(
    <Counter />,
    document.querySelector('#app') as HTMLElement
  )
}
