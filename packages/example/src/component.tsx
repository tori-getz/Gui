import * as Gui from '@gui/core';
import * as GuiDOM from '@gui/dom';

const Counter: Gui.Component = () => {
  const [ counter, setCounter ] = Gui.state<number>(0);
  const [ name, setName ] = Gui.state<string>('gui');

  Gui.effect(() => {
    console.log('repeat effect');
  });

  Gui.effect(() => {
    console.log('once effect');
  }, [])

  Gui.effect(() => {
    console.log('counter', counter);
  }, [counter]);

  Gui.effect(() => {
    console.log('name', name);
  }, [name])

  return (
    <div>
      <span>Counter: {counter}</span>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
      <div>
        <span>Name: {name}</span>
        <button onClick={() => setName('Progranner')}>set text</button>
      </div>
    </div>
  )
}

export const start = () => {  
  GuiDOM.render(
    Counter,
    document.querySelector('#app') as HTMLElement
  )
}
