import { DocMeta } from "@tulls-md/tulldoc-code";
import { ButtonIcon, Layout } from "@tulls-md/lemu";
import { ListIcon } from "@phosphor-icons/react/ssr";

export default function HeaderDoc(): DocMeta<typeof Layout.Header> {
  return {
    component: Layout.Header,
    description:
      "Шапка страницы — верхний навигационный блок макета. " +
      "Разделена на три зоны (слева, по центру, справа) и обычно содержит заголовок, навигацию и действия.",
    mainExample: {
      title: "Tulls",
      left: <ButtonIcon rounded appearance={"ghost"} icon={ListIcon} />,
      center: <div>Search</div>,
      right: <ButtonIcon rounded appearance={"ghost"} icon={ListIcon} />,
    },
    defaultArgs: {
      title: "Tulls",
    },
    examples: [
      {
        prop: "title",
        description:
          "Заголовок шапки. Отображает название приложения или текущего раздела.",
        view: "cell",
        defaultArgs: { title: "Tulldoc" },
      },
      {
        prop: "left",
        description:
          "Контент в левой зоне шапки. Обычно используется для кнопки меню или навигации назад.",
        view: "cell",
        defaultArgs: { left: <ButtonIcon icon={ListIcon} /> },
      },
      {
        prop: "center",
        description:
          "Контент в центральной зоне шапки. Подходит для строки поиска или ключевой информации.",
        view: "cell",
        defaultArgs: { center: "Search" },
      },
      {
        prop: "right",
        description:
          "Контент в правой зоне шапки. Обычно используется для второстепенных действий или иконок.",
        view: "cell",
        defaultArgs: { right: <ButtonIcon icon={ListIcon} /> },
      },
    ],
  };
}
