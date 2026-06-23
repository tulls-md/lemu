import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { Ripple } from "@tulls-md/lemu";

import RippleSurface from "../../examples/ripple/ripple-surface";
import RippleColor from "../../examples/ripple/ripple-color";
import RippleDuration from "../../examples/ripple/ripple-duration";

function AnatomyComponent() {
  return (
    <Anatomy.Root>
      <Anatomy.Part label={"Ripple"} />
    </Anatomy.Root>
  );
}

export default function RippleDoc(): DocMeta<typeof Ripple> {
  return {
    anatomy: <AnatomyComponent />,
    component: Ripple,
    examples: [
      { prop: "color", disabled: true },
      { prop: "duration", disabled: true },
      {
        title: "Эффект волны",
        description:
          "Вставьте `<Ripple />` в контейнер с `position: relative` и `overflow: hidden`. Нажмите на поверхность, чтобы запустить волну от точки нажатия.",
        example: <RippleSurface />,
      },
      {
        title: "Цвет волны",
        description:
          "Проп `color` задаёт цвет волны. По умолчанию наследуется из CSS-переменной `--ripple-color` родителя с откатом на `currentColor`.",
        example: <RippleColor />,
      },
      {
        title: "Длительность",
        description:
          "Проп `duration` задаёт длительность анимации в миллисекундах — насколько быстро волна затухает после нажатия.",
        example: <RippleDuration />,
      },
    ],
  };
}
