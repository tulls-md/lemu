import styles from "./cell.module.css";
import type { Icon } from "@phosphor-icons/react";
import { Avatar } from "../avatar";

interface CellProps {
  /**
   * Заголовок ячейки
   */
  title: string;

  /**
   * Иконка, отображается слева
   */
  icon?: Icon;

  /**
   * Описание ясчйеки ячейки. Отображается под заголовком
   */
  description?: string;

  /**
   * ссылка на изображение
   * */
  avatarSrc?: string;
}

export function Cell({
  title,
  description,
  icon: IconComponent,
  avatarSrc,
}: CellProps) {
  return (
    <div className={styles.Root}>
      {IconComponent && <IconComponent />}

      {avatarSrc && <Avatar src={avatarSrc} fallback={"JF"} />}

      <div className={styles.Info}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Description}>{description}</div>
      </div>
    </div>
  );
}
