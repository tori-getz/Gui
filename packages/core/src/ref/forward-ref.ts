import { GuiElement } from "..";
import type { ForwardRef, IRef } from "./types";

export const forwardRef = <Ref = null, Props = {}>(
  forward: ForwardRef<Props & { ref: IRef<Ref> }, Ref>,
) => {
  return (props : Props & { ref: IRef<Ref> }): GuiElement => {
    return forward(props, props.ref);
  }
}
