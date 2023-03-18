export type SetProperty = (
  node: HTMLElement,
  key: string,
  prevValue: unknown,
  nextValue: unknown,
) => void;

export type IListener<K extends keyof HTMLElementEventMap> = {
  [key: string]: (event: HTMLElementEventMap[K]) => unknown;
};

export interface ChangeEvent<T = Element> {
  target: EventTarget & T;
}

export type OnChangeCallback = (e: ChangeEvent) => unknown;
