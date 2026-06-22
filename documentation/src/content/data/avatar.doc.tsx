import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { Avatar } from "@tulls-md/lemu";

function AnatomyComponent() {
  return (
    <Anatomy.Root>
      <Anatomy.Part label={"Avatar"}>
        <Anatomy.Part label={"Image | Fallback"} />
      </Anatomy.Part>
    </Anatomy.Root>
  );
}

export default function AvatarDoc(): DocMeta<typeof Avatar> {
  return {
    anatomy: <AnatomyComponent />,
    component: Avatar,
    defaultArgs: {
      src: "https://i.pinimg.com/originals/71/c5/7f/71c57f657b7db1eda23eb48fa79cdd51.jpg?nii=t",
    },
    examples: [
      {
        prop: "fallback",
        defaultArgs: {
          src: undefined,
        },
      },
    ],
  };
}
