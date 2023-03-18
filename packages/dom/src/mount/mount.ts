import { globalStateManager, IGuiNode } from "@gui/core";
import { patch } from "~/dom";
import { MountFn } from "./types";

const manager = globalStateManager();
const { state: globalState } = manager;

export const mount: MountFn = (
  element,
  container
) => {
  let app = patch(element({}, null) as IGuiNode, container) as HTMLElement;

  manager.subscribe(() => {
    globalState.states.cursor = 0;
    globalState.effects.cursor = 0;

    app = patch(element({}, null) as IGuiNode, app) as HTMLElement;
  });

  return app;
}
