import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  getCurrentIndexFromProps,
  getIsLeftActive,
  getIsRightActive,
  getWrapperWidth,
} from "./helpers";

import "./style.scss";
/**
 *
 * @param {*} props
 * @returns
 * @param cardIds
 * @param maxCards max cards to show on display
 * @param renderCard a function callback to render a card given its id and a hidden props. eg: (id: string, hidden?: boolean) => JSX.Element
 * @param fallback a fallback component to should if cardIds array is Empty
 * @param style.margin is a number in percentage and should be between 0 and 100
 * @param style.centered a boolean that determines if the cards should be centered or aligned to the left, default value is `false`
 * @param currentIndex  setting the start index value
 */
const Carousel = (props) => {
  if (props.maxCards <= 0) {
    throw new Error("props.maxCards should be a positive value bigger than 0");
  }

  const { cardIds, maxCards, renderCard, style } = props;
  const computedCurrentIndex = getCurrentIndexFromProps(
    props.cardIds.length,
    props.maxCards,
    props.currentIndex
  );
  const [startIndex, setStartIndex] = useState({
    current: computedCurrentIndex,
    previous: computedCurrentIndex,
  });
  const startIndexRef = useRef(startIndex);
  startIndexRef.current = startIndex;
  const { children, ...p } = props;
  const propsRef = useRef(p);
  propsRef.current = p;

  const cardsLength = props.cardIds.length;

  // const startIndexRef = useRef(startIndex);
  // startIndexRef.current = startIndex;

  const idsLengthRef = useRef(props.cardIds.length);
  idsLengthRef.current = props.cardIds.length;

  useEffect(() => {
    // on inject current index change: adjust startIndex state
    const { current } = startIndexRef.current;
    const props = propsRef.current;

    const computedCurrentIndex = getCurrentIndexFromProps(
      props.cardIds.length,
      props.maxCards,
      props.currentIndex
    );
    if (computedCurrentIndex !== current) {
      setStartIndex({ previous: current, current: computedCurrentIndex });
    }
  }, [props.currentIndex]);

  useEffect(() => {
    // on maxCards change: adjust start index to wrap all the white space
    const sIdx = startIndexRef.current;
    const maxStartIndex = Math.max(0, idsLengthRef.current - maxCards);

    if (sIdx.current > maxStartIndex) {
      const current = maxStartIndex;
      const previous = current; // sIdx.current;
      setStartIndex({ previous, current });
    } else {
      setStartIndex({ ...sIdx, previous: sIdx.current });
    }
  }, [maxCards]);

  const isLeftActive = getIsLeftActive(startIndex.current);
  const isRightActive = getIsRightActive(
    startIndex.current,
    cardsLength,
    props.maxCards
  );

  const handleRight = useCallback(() => {
    if (!isRightActive) return;

    const props = propsRef.current;
    const cardsLength = props.cardIds.length;
    const { current } = startIndexRef.current;
    const nextCurrent = current + props.maxCards;
    const normalizedNextIndex = Math.min(
      nextCurrent,
      cardsLength - props.maxCards
    );

    if (current !== normalizedNextIndex) {
      return setStartIndex({
        previous: current,
        current: normalizedNextIndex,
      });
    }
  }, [isRightActive]);

  const handleLeft = useCallback(() => {
    if (!isLeftActive) return;

    const props = propsRef.current;
    const { current } = startIndexRef.current;
    const nextIndex = current - props.maxCards;
    const normalizedNextIndex = Math.max(nextIndex, 0);

    if (current !== normalizedNextIndex) {
      return setStartIndex({
        previous: current,
        current: normalizedNextIndex,
      });
    }
  }, [isLeftActive]);

  const statusDetails = { ...startIndex, cardsLength, maxCards };
  const statusDetailsRef = useRef(statusDetails);
  statusDetailsRef.current = statusDetails;

  const isBlurred = useCallback((index) => {
    const { current, previous, maxCards, cardsLength } =
      statusDetailsRef.current;
    return (
      index < current || index > Math.min(current + maxCards - 1, cardsLength)
    );
  }, []);

  // animating the entire cards wrapper
  const from = `calc(0px - ${(startIndex.previous / maxCards) * 100}%)`;
  const to = `calc(0px - ${(startIndex.current / maxCards) * 100}%)`;

  const renderCardWrapper = useCallback(
    (id, index) => {
      const blurred = isBlurred(index);

      return (
        <div className="carousel__card" key={id} $maxCards={maxCards}>
          {renderCard(id, blurred)}
        </div>
      );
    },
    [maxCards, renderCard, isBlurred]
  );

  const initial = useMemo(() => ({ x: from }), [from]);
  const animate = useMemo(() => ({ x: to }), [to]);

  if (!cardsLength) return props.fallback || null;

  const wrapperWidth = getWrapperWidth(maxCards, props.style);
  const transitionDuration =
    startIndex.current === startIndex.previous ? 0 : 0.3;
  return (
    <div
      className="carousel"
      style={{
        "--carousel-cards-width": wrapperWidth,
        "--carousel-max-cards": maxCards,
      }}
    >
      <span className="carousel__arrow-wrapper carousel__arrow-wrapper--left">
        {isLeftActive && (
          <span onClick={handleLeft} data-testid="arrow-left">
            {"<"}
          </span>
        )}
      </span>
      <div
        className={classnames("carousel__cards-wrapper", {
          ["carousel__cards-wrapper--centered"]: style?.centered,
        })}
      >
        <motion.div
          className="carousel__animation-wrapper"
          initial={initial}
          animate={animate}
          transition={{ duration: transitionDuration }}
        >
          {cardIds.map(renderCardWrapper)}
        </motion.div>
      </div>
      <span className="carousel__arrow-wrapper carousel__arrow-wrapper--right">
        {isRightActive && (
          <span onClick={handleRight} data-testid="arrow-right">
            {">"}
          </span>
        )}
      </span>
    </div>
  );
};
export default React.memo(Carousel);
