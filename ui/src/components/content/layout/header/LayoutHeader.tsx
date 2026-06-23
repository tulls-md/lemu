import { Triplet, type TripletProps } from "../../../molecules";

interface LayoutHeaderProps extends TripletProps {
  /**
   * Заголовок страницы
   */
  title?: string;
}

export function LayoutHeader({
  left,
  center,
  right,
  title,
}: LayoutHeaderProps) {
  return (
    <Triplet
      left={
        <>
          {left} <span>{title}</span>
        </>
      }
      center={center}
      right={right}
    />
  );
}
