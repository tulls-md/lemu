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
      { prop: "ref", disabled: true },
      { prop: "leftIcon", defaultArgs: { leftIcon: MartiniIcon } },
      { prop: "rightIcon", defaultArgs: { rightIcon: MartiniIcon } },
      { prop: "disabled", defaultArgs: { disabled: true } },
    ],
  };
}
