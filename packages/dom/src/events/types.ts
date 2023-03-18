export interface GuiEvent<T extends HTMLElement = HTMLInputElement, E extends Event = InputEvent> {
  event: E;
  target: EventTarget & T;
}
