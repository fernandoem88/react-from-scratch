import React, { useCallback } from "react";
import { useRouter } from "next/router";

import Card from "@src/shared/components/Card";
import { $asset } from "@src/shared/queries";

interface Props {
  id: string;
  pathId: string;
}
const CardContainer: React.FC<Props> = (props) => {
  const [recommendeAdsset] = $asset.useSelector([props.id], (s) =>
    s.getRecommendedAssetByPathId(props.pathId)
  );

  const router = useRouter();
  const handleClick = useCallback(() => {
    const uri = encodeURIComponent(props.pathId);
    router.push(`/asset/${props.id}?pathId=${uri}`);
  }, [router, props.id, props.pathId]);

  if (!recommendeAdsset) return null;

  return <Card asset={recommendeAdsset} onClick={handleClick} />;
};
export type ICardContainerProps = Props;
export default React.memo(CardContainer);
