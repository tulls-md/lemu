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
  };
}
