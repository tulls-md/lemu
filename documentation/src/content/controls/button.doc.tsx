import { DocMeta } from "@tulls-md/tulldoc-code";
import { Button } from "@tulls-md/lemu";
import { MartiniIcon } from "@phosphor-icons/react/ssr";

export default function createButtonDoc(): DocMeta {
  return {
    description: "React компонент, оборачивающий `HTML`-тег <button>." +
      "Используеться для выполнения какого-то действия на странице.",
    component: Button,
    defaultArgs: {
      label: "Click Me!",
    },
    examples: [
      // { prop: 'onClick', defaultArgs: { onClick: () => alert("Click!") } },
      { prop: "ref", disabled: true },
      { prop: "leftIcon", defaultArgs: { leftIcon: MartiniIcon } },
      { prop: "rightIcon", defaultArgs: { rightIcon: MartiniIcon } },
      { prop: "disabled", defaultArgs: { disabled: true } },
    ],
  };
}
