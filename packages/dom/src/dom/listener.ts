import { IListener } from "./types";

export function listener<K extends keyof HTMLElementEventMap>(
  this: IListener<K>,
  event: HTMLElementEventMap[K]
) {
  this[event.type](event);
}
