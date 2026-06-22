import { DocMeta } from "@tulls-md/tulldoc-code";
import { Layout } from "@tulls-md/lemu";

export default function RootDoc(): DocMeta<typeof Layout.Root> {
  return {
    component: Layout.Root,
  };
}
