import { CarouselProps } from ".";

export const getIsRightActive = (currentIndex, cardsLength, maxCards) =>
  currentIndex + maxCards < cardsLength;

export const getIsLeftActive = (currentIndex) => currentIndex > 0;

export const getWrapperWidth = (maxCards, style = {}) => {
  const { centered = false, margin = 20 } = style;
  const marginBlocks = centered ? 2 : 1;
  const singleCardBlocks = parseInt((100 / margin).toString());
  const totalBlocks = singleCardBlocks * maxCards + marginBlocks;
  //
  const singleCardPerc = (singleCardBlocks * 100) / totalBlocks;
  const wrapperPerc = singleCardPerc * maxCards;

  const containerWidth = wrapperPerc + "%";
  return containerWidth;
};

export const getCurrentIndexFromProps = (
  cardsLength,
  maxCards,
  currentIndex = 0
) => {
  if (!currentIndex || currentIndex <= 0 || maxCards >= cardsLength) return 0;
  const lastIndex = Math.max(0, cardsLength - maxCards);
  return Math.min(lastIndex, currentIndex);
};
