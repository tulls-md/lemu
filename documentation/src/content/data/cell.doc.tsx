import { DocMeta } from "@tulls-md/tulldoc-code";
import { Cell } from "@tulls-md/lemu";

export default function CellDoc(): DocMeta<typeof Cell> {
  return {
    component: Cell,
    description: "Компонент ячейки. Используется для отображения информации",
    examples: [{ prop: "title", view: "cell" }],
  };
}
