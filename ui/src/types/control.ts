import type { ButtonHTMLAttributes } from "react";

export type ControlVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type ControlSize = "sm" | "md" | "lg";
export type ControlAppearance = "solid" | "outline" | "ghost";

export interface ControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Отображаемый текст в кнопке
   */
  label: string;

  /**
   * Вариант отображения кнопки
   */
  variant?: ControlVariant;

  /**
   * Размер кнопки
   */
  size?: ControlSize;

  /**
   * Внешний вид кнопки: сплошная заливка или обводка
   */
  appearance?: ControlAppearance;

  /**
   * Rounded
   */
  rounded?: boolean;
}
