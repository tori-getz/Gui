import type { Component } from "@gui-framework/core";

export type MountFn = (
  element: Component,
  container: HTMLElement
) => HTMLElement;
