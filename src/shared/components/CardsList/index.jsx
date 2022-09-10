import React from "react";
import Carousel from "../Carousel";
import MessageWrapper from "../MessageWrapper";
import "./style.scss";

const CardsList = ({
  currentIndex,
  title,
  maxCards,
  cardIds = [],
  renderCard,
  fallbackMessage,
  style = { centered: true, margin: 0 },
}) => {
  return (
    <div className="cards-list">
      {title && <div className="cards-list__title">{title}</div>}
      <Carousel
        cardIds={cardIds}
        renderCard={renderCard}
        maxCards={maxCards}
        fallback={<MessageWrapper>{fallbackMessage}</MessageWrapper>}
        style={style}
        currentIndex={currentIndex}
      />
    </div>
  );
};
export default CardsList;
