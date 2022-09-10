import React, { useCallback, useMemo } from "react";
import { $HomeApp } from "../..";

import { MessageWrapper, CardsList } from "../../../../shared/components";

import CardContainer from "../CardContainer";
import * as sc from "./styled";

const defaultStyle = { margin: 25 };
const LaneContainer = (props) => {
  const lanes = $HomeApp.useSlice("lanes");

  const lane = lanes?.[props.id];

  const renderCard = useCallback(
    (cardId, hidden = false) => <CardContainer id={cardId} hidden={hidden} />,
    []
  );
  const centered = props.maxCards === 1;
  const style = useMemo(() => ({ ...defaultStyle, centered }), [centered]);

  if (isLoading) return <MessageWrapper>loading...</MessageWrapper>;

  if (error) return <MessageWrapper>{error.message}</MessageWrapper>;
  if (!lane) return <MessageWrapper>no data</MessageWrapper>;

  const fallbackMessage =
    "There is no items right now, please try again later!";

  return (
    <sc.Root>
      <CardsList
        cardIds={lane.assetsIds}
        title={lane.headline}
        renderCard={renderCard}
        maxCards={props.maxCards}
        fallbackMessage={fallbackMessage}
        style={style}
        // currentIndex={2}
      />
    </sc.Root>
  );
};
export default LaneContainer;
