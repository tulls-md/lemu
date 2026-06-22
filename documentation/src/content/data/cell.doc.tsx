import { DocMeta } from "@tulls-md/tulldoc-code";
import { Cell } from "@tulls-md/lemu";
import { BuildingIcon } from "@phosphor-icons/react/ssr";

export default function CellDoc(): DocMeta<typeof Cell> {
  return {
    component: Cell,
    description: "Компонент ячейки. Используется для отображения информации",
    defaultArgs: {
      title: 'ООО "Бнал"',
    },
    examples: [
      { prop: "title", view: "cell" },
      {
        prop: "description",
        view: "cell",
        defaultArgs: { description: "Лучшая компания на всем белом свете" },
      },
      {
        prop: "icon",
        view: "cell",
        defaultArgs: { icon: BuildingIcon },
      },
    ],
  };
}
