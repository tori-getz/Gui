import { globalStateManager, IGuiNode } from "@gui/core";
import { isArray, isEmpty } from "lodash";
import { setProps } from "./props";
import { setEvents } from "./events";

const manager = globalStateManager();

export const renderWithSubscribe = (
  element: IGuiNode,
  container: HTMLElement
) => {
  render(element, container);

  manager.subscribe(() => {
    console.log(manager.state);
    container.removeChild(container.firstChild as Node);
    // manager.state.cursor = 0;
    render(element, container);
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
