import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { Cell } from "@tulls-md/lemu";
import { AlienIcon, BuildingIcon } from "@phosphor-icons/react/ssr";

function AnatomyComponent() {
  return (
    <Anatomy.Root>
      <Anatomy.Part label={"Cell"}>
        <Anatomy.Part label={"Icon"} />
        <Anatomy.Part label={"Avatar"} />
        <Anatomy.Part label={"Info"}>
          <Anatomy.Part label={"Title"} />
          <Anatomy.Part label={"Description"} />
        </Anatomy.Part>
      </Anatomy.Part>
    </Anatomy.Root>
  );
}

export default function CellDoc(): DocMeta<typeof Cell> {
  return {
    anatomy: <AnatomyComponent />,
    component: Cell,
    description: "Компонент ячейки. Используется для отображения информации",
    defaultArgs: {
      title: 'ООО "Бнал"',
    },
    mainExample: {
      title: "Уточка Петя",
      description: "Лучшая уточка на диком западе",
      avatarSrc:
        "https://i.pinimg.com/originals/71/c5/7f/71c57f657b7db1eda23eb48fa79cdd51.jpg?nii=t",
      icon: AlienIcon,
    },
    examples: [
      {
        prop: "title",
        description:
          "Заголовок ячейки. Основной текст, который описывает её содержимое.",
        view: "cell",
      },
      {
        prop: "description",
        description:
          "Дополнительный текст, отображаемый под заголовком. Уточняет или раскрывает содержимое ячейки.",
        view: "cell",
        defaultArgs: { description: "Лучшая компания на всем белом свете" },
      },
      {
        prop: "icon",
        description:
          "Иконка, отображаемая слева от текста. Помогает быстрее распознать тип содержимого ячейки.",
        view: "cell",
        defaultArgs: { icon: BuildingIcon },
      },
      {
        prop: "avatarSrc",
        description:
          "Ссылка на изображение аватара, отображаемого слева от текста. Используется для визуального представления пользователя или объекта.",
        view: "cell",
        defaultArgs: {
          avatarSrc:
            "https://i.pinimg.com/originals/71/c5/7f/71c57f657b7db1eda23eb48fa79cdd51.jpg?nii=t",
        },
      },
    ],
  };
}
