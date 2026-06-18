import styles from "./cell.module.css";

interface CellProps {
  /**
   * Заголовок ячейки
   */
  title: string;

  /**
   * Описание ясчйеки ячейки. Отображается под заголовком
   */
  description?: string;
}

export function Cell({ title, description }: CellProps) {
  return (
    <div className={styles.Root}>
      <div>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Description}>{description}</div>
      </div>
    </div>
  );
}
