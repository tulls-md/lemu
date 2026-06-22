import { DocMeta } from "@tulls-md/tulldoc-code";
import { ButtonIcon, Layout } from "@tulls-md/lemu";
import { ListIcon } from "@phosphor-icons/react/ssr";

function Example() {
  return <div>123</div>;
}

export default function HeaderDoc(): DocMeta<typeof Layout.Header> {
  return {
    component: Layout.Header,
    mainExample: {
      left: <ButtonIcon icon={ListIcon} />,
      right: <ButtonIcon icon={ListIcon} />,
    },
    examples: [
      { prop: "title", view: "cell", defaultArgs: { title: "Tulldoc" } },
      {
        prop: "left",
        view: "cell",
        defaultArgs: { left: <ButtonIcon icon={ListIcon} /> },
      },
      { prop: "center", view: "cell" },
      {
        prop: "right",
        view: "cell",
        defaultArgs: { left: <ButtonIcon icon={ListIcon} /> },
      },
    ],
  };
}
