import styles from "./triplet.module.css";
import clsx from "clsx";

export type TripletItem = React.ReactNode | string | null;

export interface TripletProps {
  left?: TripletItem;
  center?: TripletItem;
  right?: TripletItem;
}

export function Triplet({ left, center, right }: TripletProps) {
  return (
    <div className={styles.Root}>
      <div className={clsx(styles.Column, styles.ColumnLeft)}>{left}</div>
      <div className={clsx(styles.Column, styles.ColumnCenter)}>{center}</div>
      <div className={clsx(styles.Column, styles.ColumnRight)}>{right}</div>
    </div>
  );
}
