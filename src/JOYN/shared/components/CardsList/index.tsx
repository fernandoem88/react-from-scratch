import React from "react";
import { CardMessage } from "..";
import Carousel, { CarouselProps } from "../Carousel";

import * as sc from "./styled";

interface Props {
  currentIndex?: number;
  title?: string;
  maxCards: number;
  cardIds: string[];
  renderCard: CarouselProps["renderCard"];
  fallbackMessage: string;
  style?: { centered?: boolean; margin?: number };
}

const CardsList: React.FC<Props> = (props) => {
  return (
    <sc.Root>
      {props.title && <sc.Title>{props.title}</sc.Title>}
      <Carousel
        cardIds={props.cardIds}
        renderCard={props.renderCard}
        maxCards={props.maxCards}
        fallback={<CardMessage>{props.fallbackMessage}</CardMessage>}
        style={props.style}
        currentIndex={props.currentIndex}
      />
    </sc.Root>
  );
};
export type CardsListProps = Props;
export default React.memo(CardsList);
