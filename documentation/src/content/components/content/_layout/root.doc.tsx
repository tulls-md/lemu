import { DocMeta } from "@tulls-md/tulldoc-code";
import { Layout } from "@tulls-md/lemu";

export default function RootDoc(): DocMeta<typeof Layout.Root> {
  return {
    component: Layout.Root,
    description:
      "Корневой контейнер макета. Объединяет основные зоны страницы — шапку, контент и подвал — " +
      "и задаёт общую структуру и компоновку интерфейса.",
    examples: [{ prop: "children", disabled: true }],
  };
}
