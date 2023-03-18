import { IPatchedNode } from "~/dom";
import { listener } from "./listener";
import type { GuiEvent } from "./types";

export const createEvent = <
  T extends HTMLElement = HTMLInputElement,
  E extends Event = InputEvent
>(
  event: E
): GuiEvent<T, E> => ({
  event,
  target: event.target as EventTarget & T,
})

export const attachEvent = (
  node: IPatchedNode,
  eventName: string,
  handler: unknown,
) => {
  node[eventName] = (event: Event) => {
    const extendedEvent = createEvent(event);

    (handler as Function)(extendedEvent);
  };

  if (!handler) {
    node.removeEventListener(eventName, listener)
  } else {
    node.addEventListener(eventName, listener);
  }
}
