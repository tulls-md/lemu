import type { ControlProps } from "../../../types/control.ts";
import type { Icon } from "@phosphor-icons/react";
import type { Ref } from "react";

import { Ripple } from "../../molecules";

import stylesControl from "../control.module.css";
import clsx from "clsx";

type ButtonProps = ControlProps & {
  /**
   * Иконка, отображаемая слева от label
   */
  leftIcon?: Icon;

  /**
   * Иконка, отображаемая справа от label
   */
  rightIcon?: Icon;
  ref?: Ref<HTMLButtonElement>;
};

export function Button({
  label,
  variant = "primary",
  size = "md",
  appearance = "solid",
  rounded = false,
  type = "button",
  className,
  leftIcon: LeftIconComponent,
  rightIcon: RightIconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        stylesControl.Root,
        stylesControl[`Variant--${variant}`],
        stylesControl[`Size--${size}`],
        stylesControl[`Appearance--${appearance}`],
        rounded && stylesControl.Rounded,
        className,
      )}
    >
      <span className={stylesControl.IconSlot} aria-hidden={!LeftIconComponent}>
        {LeftIconComponent && <LeftIconComponent />}
      </span>
      <span className={stylesControl.Label}>{label}</span>
      <Ripple />
      <span
        className={stylesControl.IconSlot}
        aria-hidden={!RightIconComponent}
      >
        {RightIconComponent && <RightIconComponent />}
      </span>
    </button>
  );
}
