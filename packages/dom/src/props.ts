import type { IGuiNode } from "@gui/core";
import { eventList } from './event-list';

export const setProps = (
  element: HTMLElement,
  node: IGuiNode,
): void => {
  for (const prop in node.props) {
    if (eventList.includes(prop)) continue;

    const value = node.props[prop];

    if (prop === 'className') {
      element.classList.add(value);
      continue;
    }

    element.setAttribute(prop, value);
  }
};
