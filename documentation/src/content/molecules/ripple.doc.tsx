import type { DocMeta } from "@tulls-md/tulldoc-code";
import { Ripple } from "@tulls-md/lemu";

export default function RippleDoc(): DocMeta<typeof Ripple> {
  return {
    component: Ripple,
  }
}
