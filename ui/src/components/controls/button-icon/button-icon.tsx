import type { ControlProps } from "../../../types/control.ts";
import type { Icon } from "@phosphor-icons/react";

import stylesControl from "../control.module.css";
import stylesIcon from "./button-icon.module.css";
import clsx from "clsx";
import { Ripple } from "../../molecules";

type ButtonIconProps = Omit<ControlProps, "label"> & {
  icon: Icon;
};

export function ButtonIcon({
  variant = "primary",
  size = "md",
  appearance = "solid",
  rounded = false,
  type = "button",
  className,
  icon: IconComponent,
  ...props
}: ButtonIconProps) {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        stylesControl.Root,
        stylesControl[`Variant--${variant}`],
        stylesControl[`Size--${size}`],
        stylesControl[`Appearance--${appearance}`],
        stylesIcon.Square,
        rounded && stylesIcon.Circle,
        className,
      )}
    >
      <IconComponent />
      <Ripple />
    </button>
  );
}
