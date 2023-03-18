import type { Component } from "@gui/core";

export type MountFn = (
  element: Component,
  container: HTMLElement
) => HTMLElement;
