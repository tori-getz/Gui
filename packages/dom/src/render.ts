import { Component, globalStateManager, IGuiNode } from "@gui/core";
import { isArray, isEmpty } from "lodash";
import { setProps } from "./props";
import { setEvents } from "./events";

const manager = globalStateManager();
const { state: globalState } = manager;

export const renderWithSubscribe = (
  Element: Component,
  container: HTMLElement
) => {
  render(Element({}, null) as IGuiNode, container);
  manager.subscribe(() => {
    container.removeChild(container.firstChild as Node);
    globalState.states.cursor = 0;
    globalState.effects.cursor = 0;
    render(Element({}, null) as IGuiNode, container);
  });
};

const render = (element: IGuiNode, container: HTMLElement) => {
  if (typeof element === "string" || typeof element === "number") {
    const textNode = document.createTextNode(String(element));
    container.appendChild(textNode);

    return;
  }

  const domElement = document.createElement(element.tag);

  if (isArray(element)) {
    element.forEach((el) => {
      render(el, domElement);
    });

    return;
  }

  if (!isEmpty(element.children)) {
    element.children?.forEach((child) => {
      render(child, domElement);
    });
  }

  setProps(domElement, element);
  setEvents(domElement, element);

  container.appendChild(domElement);
};
