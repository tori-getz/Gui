import { globalState, IGuiNode } from '@gui/core';
import { isArray, isEmpty } from "lodash";
import { setProps } from "./props";
import { setEvents } from "./events";

export const render = (
  element: IGuiNode,
  container: HTMLElement,
  subscribeToGlobalState: boolean = true
) => {
  if (typeof element === 'string' || typeof element === 'number') {
    const textNode = document.createTextNode(String(element));
    container.appendChild(textNode);

    return;
  }

  const domElement = document.createElement(element.tag);

  if (isArray(element)) {
    element.forEach(el => {
      render(el, domElement);
    });

    return;
  }

  if (!isEmpty(element.children)) {
    element.children?.forEach(child => {
      render(child, domElement);
    });
  }

  setProps(domElement, element);
  setEvents(domElement, element);

  container.appendChild(domElement);

  if (!subscribeToGlobalState) return;

  globalState.subscribe(() => {
    rerender(element, container);
  });
}

export const rerender = (
  element: IGuiNode,
  container: HTMLElement,
) => {
  console.log(element, container);
}
