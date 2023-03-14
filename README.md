<img src='logo.png' />

# Gui - Toy UI library

## Install

```sh
yarn add @gui/core @gui/dom
```

## Usage
```tsx
import * as Gui from '@gui/core';
import GuiDOM from '@gui/dom';

const HelloWorld: Gui.Component = () => {
  const [ counter, setCounter ] = Gui.state<number>(0);
  return (
    <div>
      <h1>Hello, Gui!</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
};

GuiDOM.render(
  <HelloWorld />,
  document.querySelector('#root'),
);

```

## Author

👤 **tori-getz**

* Github: [@tori-getz](https://github.com/tori-getz)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/tori-getz/gui/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [tori-getz](https://github.com/tori-getz).<br />
This project is [MIT](LICENSE) licensed.
