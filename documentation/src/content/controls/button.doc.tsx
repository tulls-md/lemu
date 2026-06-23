import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { Button } from "@tulls-md/lemu";
import { MartiniIcon } from "@phosphor-icons/react/ssr";

function AnatomyComponent() {
  return (
    <Anatomy.Root>
      <Anatomy.Part label={"Button"}>
        <Anatomy.Part label={"LeftIcon"} />
        <Anatomy.Part label={"Label"} />
        <Anatomy.Part label={"RightIcon"} />
      </Anatomy.Part>
    </Anatomy.Root>
  );
}

export default function createButtonDoc(): DocMeta {
  return {
    anatomy: <AnatomyComponent />,
    description:
      "React компонент, оборачивающий `HTML`-тег <button>." +
      "Используеться для выполнения какого-то действия на странице.",
    component: Button,
    defaultArgs: {
      label: "Click Me!",
    },
    mainExample: {
      label: "Взять бакальчик",
      leftIcon: MartiniIcon,
      rightIcon: MartiniIcon,
    },
    examples: [
      {
        prop: "label",
        description:
          "Текст, отображаемый внутри кнопки. Описывает действие, которое будет выполнено при нажатии.",
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
          "Размер кнопки. Управляет отступами, высотой и размером текста для разных контекстов использования.",
      },
      {
        prop: "rounded",
        description:
          "Скругляет углы кнопки до формы пилюли. Подходит для компактных и акцентных элементов интерфейса.",
      },
      {
        prop: "leftIcon",
        description:
          "Иконка, отображаемая слева от текста. Помогает быстрее распознать действие кнопки.",
        defaultArgs: { leftIcon: MartiniIcon },
      },
      {
        prop: "rightIcon",
        description:
          "Иконка, отображаемая справа от текста. Часто используется для указания направления или дополнительного действия.",
        defaultArgs: { rightIcon: MartiniIcon },
      },
      {
        prop: "adaptive",
        description:
          "Растягивает кнопку на всю доступную ширину контейнера. Удобно для мобильных и узких раскладок.",
        view: "cell",
      },
      {
        prop: "disabled",
        description:
          "Отключённое состояние кнопки: взаимодействие заблокировано, обработчики событий не вызываются.",
        defaultArgs: { disabled: true },
      },
      {
        prop: "ref",
        disabled: true,
      },
    ],
  };
}
