import { Ripple } from "@tulls-md/lemu";

export const previewHeight = 160;

export default function RippleSurface() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
        width: 240,
        height: 96,
        borderRadius: 12,
        background: "var(--pallete-gray3)",
        color: "var(--pallete-gray11)",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      Нажми сюда
      <Ripple />
    </div>
  );
}
