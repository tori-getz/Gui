import type {
  IGuiNode,
  Component
} from '~/vdom/types';

import { flatten } from 'lodash';

export const createElement = (
  tag: string | Component<any>,
  props: Record<string, string> | null,
  ...children: Array<IGuiNode>
): IGuiNode<any> | string | number | null => {
  if (typeof tag === 'function') {
    return tag(props, children);
  }

  return {
    tag: tag as string,
    props,
    children: flatten(children),
  } as any;
}
