import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const ArrowWrapper = styled.div.attrs({
  "data-tbsc-name": "Carousel--ArrowWrapper" as const,
})<{ $right?: boolean }>`
  width: 5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  ${(p) => (p.$right ? "right: 0;" : "left: 0;")}
  transition: .2s .1s;
  opacity: 1;
  z-index: 2;

  & > * {
    background: white;
    color: black;
    cursor: pointer;

    padding: 5px 12px;
    box-shadow: 0 0 12px black;
    border-radius: 5px;
  }
`;
ArrowWrapper.displayName = "CarouselArrowWrapper";

export const Root = styled.div.attrs({
  "data-tbsc-name": "Carousel--Root",
})<{}>`
  display: flex;
  align-items: center;
  overflow: hidden;
  &:not(:hover) ${ArrowWrapper} {
    opacity: 0;
  }
`;
Root.displayName = "CarouselRoot";

export const CardsWrapper = styled.div.attrs({
  "data-tbsc-name": "Carousel--CardsWrapper" as const,
})<{ $width: string; $centered?: boolean }>`
  position: relative;
  width: ${(p) => p.$width};
  ${(p) => p.$centered && "margin: auto;"}
`;
CardsWrapper.displayName = "CarouselCardsWrapper";

export const AnimatedWrapper = styled(motion.div).attrs({
  "data-tbsc-name": "Carousel--AnimatedWrapper" as const,
})<{}>`
  top: 0;
  left: 0%;
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  max-width: 100%;
`;
AnimatedWrapper.displayName = "CarouselAnimatedWrapper";

export const Card = styled.div.attrs({
  "data-tbsc-name": "Carousel--Card" as const,
})<{ $maxCards: number }>`
  position: relative;
  padding: 8px;
  display: inline-block;
  width: calc((100%) / ${(p) => p.$maxCards});
  transition: 0.3s;
`;
Card.displayName = "CarouselCard";
