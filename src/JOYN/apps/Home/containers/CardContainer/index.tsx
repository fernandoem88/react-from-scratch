import React, { useCallback } from "react";
import { useRouter } from "next/router";

import Card from "@src/shared/components/Card";
import { $lanes } from "@src/shared/queries";

interface Props {
  id: string;
  hidden?: boolean;
}
const CardContainer: React.FC<Props> = (props) => {
  const [asset] = $lanes.useSelector((s) => s.getAssetById(props.id));

  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/asset/" + props.id);
  }, [props.id, router]);

  if (!asset) return null;

  return <Card hidden={props.hidden} asset={asset} onClick={handleClick} />;
};
export type ICardContainerProps = Props;

export default React.memo(CardContainer);
