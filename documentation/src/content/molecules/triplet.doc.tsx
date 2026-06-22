import { Anatomy, DocMeta } from "@tulls-md/tulldoc-code";
import { Triplet } from "@tulls-md/lemu";

function AnatomyComponent() {
  return (
    <Anatomy.Root>
      <Anatomy.Part label={"Triplet"}>
        <Anatomy.Part label={"Left"} />
        <Anatomy.Part label={"Center"} />
        <Anatomy.Part label={"Right"} />
      </Anatomy.Part>
    </Anatomy.Root>
  );
}

export default function TripletDoc(): DocMeta {
  return {
    anatomy: <AnatomyComponent />,
    component: Triplet,
    examples: [
      { prop: "left", view: "cell" },
      { prop: "center", view: "cell" },
      { prop: "right", view: "cell" },
    ],
  };
}
