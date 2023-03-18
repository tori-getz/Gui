import { IGuiNode } from "@gui/core";
import { eventList } from "./event-list";

export const setEvents = (
  element: HTMLElement,
  node: IGuiNode
) => {
  const filteredProps = Object.keys(node.props ?? {})
    .filter(prop => eventList.includes(prop));
  
  for (const prop of filteredProps) {
    const formattedProp = prop.replaceAll('on', '').toLowerCase();
    const handler = node.props[prop];

    element.addEventListener(formattedProp, handler);
  }
}
