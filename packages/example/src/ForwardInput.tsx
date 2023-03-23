import { forwardRef } from "@gui-framework/core";
import { GuiEvent } from "@gui-framework/dom";

interface IForwardInput {
  placeholder: string;
  onChange: (event: GuiEvent<HTMLInputElement, InputEvent>) => unknown;
}

export const ForwardInput = forwardRef<HTMLInputElement, IForwardInput>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    );
  }
);
