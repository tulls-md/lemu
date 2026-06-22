import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { Ripple } from "@tulls-md/lemu";

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
  };
}
