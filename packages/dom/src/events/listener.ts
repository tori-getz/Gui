import { IListener } from "../properties/types";

export function listener<K extends keyof HTMLElementEventMap>(
  this: IListener<K>,
  event: HTMLElementEventMap[K]
) {
  console.log(this, event.type, event);
  this[event.type](event);
}
