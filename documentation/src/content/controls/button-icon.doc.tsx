import { DocMeta } from "@tulls-md/tulldoc-code";
import { ButtonIcon } from "@tulls-md/lemu";
import { AddressBookIcon } from "@phosphor-icons/react/ssr";

export default function ButtonIconDoc(): DocMeta<typeof ButtonIcon> {
  return {
    description: "React компонет для отображения действий с помощью иконок",
    component: ButtonIcon,
    defaultArgs: {
      icon: AddressBookIcon,
    },
  };
}
