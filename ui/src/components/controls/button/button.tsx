import type { ControlVariant } from "../../../types/control.ts";

interface ButtonProps {
  /**
   * Отображаемый текст в кнопке
   */
  label: string;

  /**
   * Вариант отображения кнопки
   * */
  variant: ControlVariant;
}

export function Button({ label }: ButtonProps) {
  return <button>{label}</button>
}
