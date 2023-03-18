import { Component, effect, state } from '@gui/core';
import styles from './App.module.css';
import { Counter } from './Counter';

export const App: Component = () => {
  const [ count, setCount ] = state<number>(0);

  effect(() => {
    console.log('count', count);
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
      <h1>Vite + Gui</h1>
      <div className={styles.card}>
        <Counter
          value={count}
          onChange={() => setCount(prev => prev + 1)}
        />
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
