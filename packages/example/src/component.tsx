import * as Gui from '@gui/core';
import * as GuiDOM from '@gui/dom';
import { Component } from '@gui/core';
import './style.css';

const Hahaha = () => {
  return (
    <div>
      <a>
        <h4>hahahahah</h4>
      </a>
    </div>
  );
}

const CoolComponent: Component<{ name: string }> = props => {
  return (
    <div onClick={() => alert('hello')}>
      <p className='wrapper'>hi {props.name}</p>
      <>
        <div className='hehe'>  
          <Hahaha />
        </div>
        <Hahaha />
      </>
      {/* <Hahaha /> */}
    </div>
  );
}

export const start = () => {
  GuiDOM.render(
    <CoolComponent name='getz' />,
    document.querySelector('#app') as HTMLElement
  )
  console.log(<CoolComponent name='hahah' />);
}
