interface LayoutRootProps {
  /**
   * Компоненты шапки, контента и футера
   */
  children: React.ReactNode;
}

export function LayoutRoot({ children }: LayoutRootProps) {
  return <div>{children}</div>;
}
