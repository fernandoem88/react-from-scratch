import React, { useCallback } from "react";
import { useMaxCards } from "@src/shared/hooks";
import { $lanes } from "@src/shared/queries";
import LaneContainer from "../CardsListContainer";
import * as sc from "./styled";

interface Props {}

const LanesListContainer: React.FC<Props> = (props) => {
  const [lanesIds] = $lanes.useSelector((s) => s.getLanesIds());

  const maxCards = useMaxCards();

  const renderLane = useCallback(
    (id) => <LaneContainer key={id} id={id} maxCards={maxCards} />,
    [maxCards]
  );

  if (!lanesIds) return null;

  return <sc.Root>{lanesIds.map(renderLane)}</sc.Root>;
};
export type LanesListContainerProps = Props;
export default React.memo(LanesListContainer);
