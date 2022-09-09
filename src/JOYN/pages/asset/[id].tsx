import React from "react";
import { useRouter } from "next/router";
import RootContainer from "@src/apps/Asset/containers/RootContainer";

interface Props {}
const Asset: React.FC<Props> = (props) => {
  const router = useRouter();
  const { id = "", pathId } = router.query as { id: string; pathId?: string };
  return <RootContainer id={id} pathId={pathId} />;
};
export type IAssetProps = Props;
export default React.memo(Asset);
