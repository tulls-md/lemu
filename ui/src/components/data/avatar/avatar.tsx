import { Avatar as AvatarArk } from "@ark-ui/react/avatar";

import styles from "./avatar.module.css";
import clsx from "clsx";

type AvatarSizes = "sm" | "md" | "lg";

interface AvatarProps {
  /**
   * Ссылка на изображение
   */
  src?: string;

  /**
   * Текст, который отобразиться, если ссылку не передали,
   * или ее не удалось загрузить
   */
  fallback: string;

  /**
   * Размер аватарки
   */
  size?: AvatarSizes;

  /**
   * Делаект аватар круглым
   */
  rounded?: boolean;
}

export function Avatar({
  src,
  fallback,
  size = "sm",
  rounded = false,
}: AvatarProps) {
  return (
    <AvatarArk.Root
      className={clsx(
        styles.Root,
        styles[`Size--${size}`],
        rounded && styles.Rounded,
      )}
    >
      <AvatarArk.Fallback>{fallback}</AvatarArk.Fallback>
      <AvatarArk.Image className={styles.Image} src={src} alt="avatar" />
    </AvatarArk.Root>
  );
}
