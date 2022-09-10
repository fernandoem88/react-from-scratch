import React, { useCallback } from "react";

import Card from "@/shared/components/Card";
import { $HomeApp } from "@/apps/Home";

interface Props {
  id: string;
  hidden?: boolean;
}
const CardContainer: React.FC<Props> = (props) => {
  const assets = $HomeApp.useSlice("assets");

  const asset = assets?.[props.id];

  const handleClick = () => {
    console.log("asset" + props.id, "clicked");
  };

  if (!asset) return null;

  return <Card hidden={props.hidden} asset={asset} onClick={handleClick} />;
};
export type ICardContainerProps = Props;

export default React.memo(CardContainer);
