import { withTulldoc } from "@tulls-md/tulldoc/config";

export default withTulldoc({
  output: "export",
  transpilePackages: ["@tulls-md/lemu"],
});
