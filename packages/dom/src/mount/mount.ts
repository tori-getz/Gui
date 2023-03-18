import { globalStateManager, IGuiNode } from "@gui/core";
import { patch } from "~/dom";
import { MountFn } from "./types";

const manager = globalStateManager();

export const mount: MountFn = (
  element,
  container
) => {
  let app = patch(element({}, null) as IGuiNode, container) as HTMLElement;

  manager.subscribe(() => {
    manager.clearCursors();

    app = patch(element({}, null) as IGuiNode, app) as HTMLElement;
  });

  return app;
}
