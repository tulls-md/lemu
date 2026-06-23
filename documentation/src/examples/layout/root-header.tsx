import { ButtonIcon, Layout } from "@tulls-md/lemu";
import { ListIcon } from "@phosphor-icons/react/ssr";

export default function LayoutRootHeader() {
  return (
    <Layout.Root>
      <Layout.Header
        title={"Tulls"}
        left={<ButtonIcon rounded appearance={"ghost"} icon={ListIcon} />}
        center={<div>Search</div>}
        right={<ButtonIcon rounded appearance={"ghost"} icon={ListIcon} />}
      />
    </Layout.Root>
  );
}
