import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { ButtonIcon } from "@tulls-md/lemu";
import { AddressBookIcon } from "@phosphor-icons/react/ssr";

function AnatomyComponent() {
  return (
    <Anatomy.Root>
      <Anatomy.Part label={"ButtonIcon"}>
        <Anatomy.Part label={"Icon"} />
      </Anatomy.Part>
    </Anatomy.Root>
  );
}

export default function ButtonIconDoc(): DocMeta<typeof ButtonIcon> {
  return {
    anatomy: <AnatomyComponent />,
    description: "React компонет для отображения действий с помощью иконок",
    component: ButtonIcon,
    mainExample: {
      icon: AddressBookIcon,
    },
    defaultArgs: {
      icon: AddressBookIcon,
    },
    examples: [
      {
        prop: "icon",
        description:
          "Иконка, отображаемая внутри кнопки. Единственный визуальный носитель смысла действия, поэтому выбирайте легко узнаваемые иконки.",
        defaultArgs: { icon: AddressBookIcon },
      },
      {
        prop: "variant",
        description:
          "Семантический вариант кнопки. Задаёт цветовую схему в зависимости от смысла действия: основное, второстепенное, успешное, предупреждающее или опасное.",
      },
      {
        prop: "appearance",
        description:
          "Внешний вид кнопки: сплошная заливка, обводка или прозрачный фон. Позволяет расставить визуальные акценты между действиями.",
      },
      {
        prop: "size",
        description:
          "Размер кнопки. Управляет отступами, высотой и размером иконки для разных контекстов использования.",
      },
      {
        prop: "rounded",
        description:
          "Скругляет кнопку до круглой формы. Подходит для компактных и акцентных элементов интерфейса.",
      },
      {
        prop: "disabled",
        description:
          "Отключённое состояние кнопки: взаимодействие заблокировано, обработчики событий не вызываются.",
        defaultArgs: { disabled: true },
      },
    ],
  };
}
