import {
  Component,
  effect,
  state,
  ref,
  memo
} from '@gui-framework/core';
import styles from './App.module.css';
import { Counter } from './Counter';
import { ForwardInput } from './ForwardInput';
import { helloRef } from './ref';

export const App: Component = () => {
  const [ count, setCount ] = state<number>(0);
  const [ name, setName ] = state<string>('');

  const inputRef = ref<HTMLInputElement>();

  const memoCount = memo<number>(() => {
    return count;
  }, [count]);

  effect(() => {
    console.log('memo count', memoCount);
  }, [memoCount])

  effect(() => {
    console.log('effect: running once');
  }, []);

  effect(() => {
    console.log('effect: running permanently');
    console.log(`hello ref: ${helloRef.current}`);
    console.log('input ref', inputRef.current);
  });

  effect(() => {
    console.log('effect: count', count);
  }, [count]);

  return (
    <div className={styles.app}>
      <div className={styles.logos}>
        <a href='https://vitejs.dev/' target='_blank'>
          <img className={styles.vite} width={150} height={150} src='/vite.svg' alt='Vite logo' />
        </a>
        <span>+</span>
        <a href='https://github.com/tori-getz/gui/' target='_blank'>
          <img className={styles.gui} width={150} height={150} src='/gui.png' alt='Vite logo' />
        </a>
      </div>
      <h1>Vite + {name === '' ? 'Gui' : name}</h1>
      <div className={styles.card}>
        <Counter
          value={count}
          onChange={() => {
            if (!helloRef.current) {
              helloRef.current = 'hello';
              alert('ref initialized')
            }

            setCount(5);
          }}
        />
        <ForwardInput
          ref={inputRef}
          placeholder='Enter your name'
          onChange={e => setName(e.target.value)}
        />
        <button onChange={e => console.log(e)}>
          hello
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and Gui logos to learn more
      </p>
    </div>
  )
}
