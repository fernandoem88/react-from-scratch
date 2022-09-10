import React, { useCallback, useMemo } from "react";

import { useMaxCards } from "@src/shared/hooks";
import CardsList from "@src/shared/components/CardsList";
import { $asset } from "@src/shared/queries";

import CardContainer from "../CardContainer";

interface Props {
  id: string;
  pathId?: string;
}

const CardsListContainer: React.FC<Props> = (props) => {
  const maxCards = useMaxCards();

  const [pathIds] = $asset.useSelector([props.id], (s) =>
    s.getRecommendedPathIds(props.pathId)
  );

  const renderCard = useCallback(
    (cardId: string) => <CardContainer id={props.id} pathId={cardId} />,
    [props.id]
  );

  const style = useMemo(() => (maxCards === 1 ? { centered: true } : {}), [
    maxCards,
  ]);

  if (!pathIds) return <div>no data</div>;

  return (
    <CardsList
      fallbackMessage="No uggestions for now!"
      title={"Recommended for you"}
      cardIds={pathIds}
      renderCard={renderCard}
      maxCards={maxCards}
      style={style}
    />
  );
};
export type CardsListContainerProps = Props;
export default React.memo(CardsListContainer);
