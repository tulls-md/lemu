import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { Avatar } from "@tulls-md/lemu";

function AnatomyComponent() {
  return (
    <Anatomy.Root>
      <Anatomy.Part label={"Avatar"}>
        <Anatomy.Part label={"Image | Fallback"} />
      </Anatomy.Part>
    </Anatomy.Root>
  );
}

export default function AvatarDoc(): DocMeta<typeof Avatar> {
  return {
    description:
      "Avatar - это компонент для отображения фотографии или инициалов",
    anatomy: <AnatomyComponent />,
    component: Avatar,
    defaultArgs: {
      src: "https://i.pinimg.com/originals/71/c5/7f/71c57f657b7db1eda23eb48fa79cdd51.jpg?nii=t",
    },
    mainExample: {
      src: "https://i.pinimg.com/originals/71/c5/7f/71c57f657b7db1eda23eb48fa79cdd51.jpg?nii=t",
      size: "lg",
      rounded: true,
    },
    examples: [
      {
        prop: "src",
        description:
          "Ссылка на изображение аватара. Если изображение загружено успешно, оно отображается поверх запасного содержимого.",
      },
      {
        prop: "fallback",
        description:
          "Запасное содержимое, которое отображается, если ссылка не передана или изображение не удалось загрузить. Обычно используются инициалы пользователя.",
        defaultArgs: {
          src: undefined,
        },
      },
      {
        prop: "size",
        description:
          "Размер аватара. Управляет диаметром элемента и размером запасного текста для разных контекстов использования.",
      },
      {
        prop: "rounded",
        description:
          "Скругляет аватар до круглой формы. По умолчанию аватар имеет скруглённые углы квадратной формы.",
      },
    ],
  };
}
