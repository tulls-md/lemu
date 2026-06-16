import { DocMeta } from "@tulls-md/tulldoc-code";
import { Button } from "@tulls-md/lemu";

export default function createButtonDoc(): DocMeta {
  return {
    component: Button,
    defaultArgs: {
      label: "Click Me!",
    }
  };
}
