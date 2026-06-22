import type { MDXComponents } from "mdx/types";
import { getMDXComponents } from "@tulls-md/tulldoc";
import { createDocContents } from "@tulls-md/tulldoc/server";
import { join } from "path";

const { DocTree, DocCards } = createDocContents(
  join(process.cwd(), "src/content"),
);

export function useMDXComponents(): MDXComponents {
  return getMDXComponents({ DocTree, DocCards });
}
