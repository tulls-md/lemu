import type { ControlProps } from "../../../types/control.ts";
import type { Icon } from "@phosphor-icons/react";

import { Ripple } from "../../molecules";

import styles from "./button.module.css";
import clsx from "clsx";

type ButtonProps = ControlProps & {
  leftIcon?: Icon;
  rightIcon?: Icon;
};

export function Button({
  label,
  variant = "primary",
  size = "md",
  appearance = "solid",
  rounded = false,
  leftIcon: LeftIconComponent,
  rightIcon: RightIconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.Root,
        styles[`Variant--${variant}`],
        styles[`Size--${size}`],
        styles[`Appearance--${appearance}`],
        rounded && styles.Rounded,
      )}
      {...props}
    >
      <span className={styles.IconSlot} aria-hidden={!LeftIconComponent}>
        {LeftIconComponent && <LeftIconComponent />}
      </span>
      <span className={styles.Label}>{label}</span>
      <Ripple />
      <span className={styles.IconSlot} aria-hidden={!RightIconComponent}>
        {RightIconComponent && <RightIconComponent />}
      </span>
    </button>
  );
}
