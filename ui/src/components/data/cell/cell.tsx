import styles from "./cell.module.css";
import type { Icon } from "@phosphor-icons/react";

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
}

export function Cell({ title, description, icon: IconComponent }: CellProps) {
  return (
    <div className={styles.Root}>
      {IconComponent && <IconComponent />}

      <div>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Description}>{description}</div>
      </div>
    </div>
  );
}
