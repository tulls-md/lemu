import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { Triplet } from "@tulls-md/lemu";

function AnatomyComponent() {
  return (
    <Anatomy.Root>
      <Anatomy.Part label={"Triplet"}>
        <Anatomy.Part label={"Left"} />
        <Anatomy.Part label={"Center"} />
        <Anatomy.Part label={"Right"} />
      </Anatomy.Part>
    </Anatomy.Root>
  );
}

export default function TripletDoc(): DocMeta {
  return {
    anatomy: <AnatomyComponent />,
    component: Triplet,
    examples: [
      {
        prop: "left",
        description:
          "Контент, отображаемый в левой колонке. Обычно используется для основного действия или подписи.",
        view: "cell",
      },
      {
        prop: "center",
        description:
          "Контент, отображаемый в центральной колонке. Выравнивается по центру и подходит для заголовка или ключевой информации.",
        view: "cell",
      },
      {
        prop: "right",
        description:
          "Контент, отображаемый в правой колонке. Обычно используется для второстепенного действия или дополнительной информации.",
        view: "cell",
      },
    ],
  };
}
