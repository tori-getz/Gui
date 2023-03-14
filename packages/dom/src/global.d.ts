declare namespace JSX {
  type Element = any & {
    onClick: Function
  };

  interface IntrinsicElements extends IntrinsicElementMap {}

  type IntrinsicElementMap = {
    [K in keyof HTMLElementTagNameMap]: {
      [k: string]: any;
    };
  };
}
