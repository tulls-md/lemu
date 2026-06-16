import type { ControlProps } from "../../../types/control.ts";

import { Ripple } from "../../molecules";

import styles from "./button.module.css";
import clsx from "clsx";

type ButtonProps = ControlProps;

export function Button({
  label,
  variant = "primary",
  size = "md",
  appearance = "solid",
  rounded = false,
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
    >
      <span className={styles.Label}>{label}</span>
      <Ripple />
    </button>
  );
}
