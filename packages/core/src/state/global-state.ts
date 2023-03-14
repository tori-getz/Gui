import type { IGlobalState, IGlobalStateManager, Subscriber } from "./types";

declare global {
  interface Window {
    GuiGlobalState: IGlobalState
  }
}

export const globalStateManager = (): IGlobalStateManager => {
  const state = getGlobalState();

  const subscribe = (subscriber: Subscriber): void => {
    state.subscribers.push(subscriber);
  }

  const notify = (): void => {
    state.subscribers.forEach(subscriber => {
      subscriber();
    });
  }

  return {
    state,
    subscribe,
    notify,
  };
}

const getGlobalState = (): IGlobalState => {
  if (!(window as any).GuiGlobalState) {
    (window as any).GuiGlobalState = {
      states: [],
      cursor: 0,
      subscribers: []
    };
  }

  return (window as any).GuiGlobalState;
}
