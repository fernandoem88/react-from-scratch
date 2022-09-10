import useMaxCards from "../../../../shared/hooks/useMaxCards";
import React, { useCallback, useMemo } from "react";
import { $HomeApp } from "../..";
import { MessageWrapper, CardsList } from "../../../../shared/components";

import CardContainer from "../CardContainer";
import "./style.scss";

const defaultStyle = { margin: 25 };
const LaneContainer = (props) => {
  const lanes = $HomeApp.useSlice("lanes");

  const lane = lanes?.[props.id];
  const maxCards = useMaxCards();

  const renderCard = useCallback(
    (cardId, hidden = false) => <CardContainer id={cardId} hidden={hidden} />,
    []
  );
  const centered = maxCards === 1;
  const style = useMemo(() => ({ ...defaultStyle, centered }), [centered]);

  if (!lane) return <MessageWrapper>no data</MessageWrapper>;

  const fallbackMessage =
    "There is no items right now, please try again later!";

  return (
    <section className="lane-container">
      <CardsList
        cardIds={lane.assetsIds}
        title={lane.headline}
        renderCard={renderCard}
        maxCards={maxCards}
        fallbackMessage={fallbackMessage}
        style={style}
        // currentIndex={2}
      />
    </section>
  );
};
export default LaneContainer;
