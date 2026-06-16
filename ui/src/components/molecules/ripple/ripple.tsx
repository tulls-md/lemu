"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./ripple.module.css";

interface RippleInstance {
  id: number;
  x: number;
  y: number;
  size: number;
}

export interface RippleProps {
  /**
   * Цвет волны. По умолчанию наследуется из CSS-переменной
   * `--ripple-color` родителя (с откатом на currentColor).
   */
  color?: string;

  /**
   * Длительность анимации в миллисекундах
   */
  duration?: number;
}

/**
 * Эффект волны (ripple) от точки нажатия.
 *
 * Молекула вешает обработчик на родительский элемент, поэтому достаточно
 * вставить `<Ripple />` внутрь контейнера с `position: relative` и
 * `overflow: hidden`.
 */
export function Ripple({ color, duration = 550 }: RippleProps) {
  const [ripples, setRipples] = useState<RippleInstance[]>([]);
  const layerRef = useRef<HTMLSpanElement>(null);
  const nextId = useRef(0);

  useEffect(() => {
    const host = layerRef.current?.parentElement;
    if (!host) return;

    const handlePointerDown = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Радиус до самого дальнего угла — чтобы волна всегда накрывала элемент
      const radius = Math.max(
        Math.hypot(x, y),
        Math.hypot(rect.width - x, y),
        Math.hypot(x, rect.height - y),
        Math.hypot(rect.width - x, rect.height - y),
      );

      setRipples((prev) => [
        ...prev,
        { id: nextId.current++, x, y, size: radius * 2 },
      ]);
    };

    host.addEventListener("pointerdown", handlePointerDown);
    return () => host.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const removeRipple = useCallback((id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  }, []);

  const layerStyle = {
    "--ripple-color": color,
    "--ripple-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <span
      ref={layerRef}
      className={styles.Root}
      style={layerStyle}
      aria-hidden="true"
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={styles.Ripple}
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
          onAnimationEnd={() => removeRipple(ripple.id)}
        />
      ))}
    </span>
  );
}
