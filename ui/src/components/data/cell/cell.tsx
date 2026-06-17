import styles from "./cell.module.css";

interface CellProps {
  title: string;
}

export function Cell({ title }: CellProps) {
  return <div className={styles.Root}>{title}</div>;
}
