import { join } from "path";
import { createDocSource } from "@tulls-md/tulldoc/server";
import { componentDocs } from "@tulls-md/tulldoc-code/server";

export const docs = createDocSource({
  contentDir: join(process.cwd(), "src/content"),
  importContent: (path) => import(`./content/${path}.mdx`),
  repo: { url: "https://github.com/tulls-md/lemu", branch: "main" },
  plugins: [
    componentDocs({
      importDoc: (path) => import(`./content/${path}.doc.tsx`),
      componentsDir: join(process.cwd(), "../ui/src/components"),
    }),
  ],
  lang: "ru",
});
