import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Carousel, { CarouselProps } from "./index";
import { getCurrentIndexFromProps } from "./helpers";

describe("testing getCurrentIndexFromProps function", () => {
  test(`it should return 0 if currentIndex is not defined`, () => {
    expect(getCurrentIndexFromProps(5, 2)).toBe(0);
  });

  test(`it should return 0 if maxCards is bigger or equal to cardsLength`, () => {
    expect(getCurrentIndexFromProps(5, 5, 1)).toBe(0);
    expect(getCurrentIndexFromProps(5, 7, 1)).toBe(0);
  });

  test("it should return the given currentIndex value when that value is between [0, cardsLength - maxCards]", () => {
    const cardsLength = 5;
    const maxCards = 2;
    expect(getCurrentIndexFromProps(cardsLength, maxCards, 1)).toBe(1);
    expect(getCurrentIndexFromProps(cardsLength, maxCards, 2)).toBe(2);
  });

  test(`it should return "cardsLength - maxCards" value when the given currentIndex value is bigger than "cardsLength - maxCards"`, () => {
    const CardsLength = 5;
    const maxCards = 2;
    expect(getCurrentIndexFromProps(CardsLength, maxCards, 4)).toBe(
      CardsLength - maxCards
    );
  });
});

describe("Testing Carousel component with 5 cards showing 2 cards at the time", () => {
  const testIds = {
    card: "CARD",
    hidden: "HIDDEN",
    visible: "VISIBLE",
    right: "arrow-right",
    left: "arrow-left",
  };
  const cardIds = new Array(5).fill("").map((_, idx) => idx + "");
  const maxCards = 2;

  const props: CarouselProps = {
    cardIds,
    maxCards,
    style: { margin: 0, centered: true },
    renderCard: (id: string, hidden?: boolean) => {
      return (
        <div data-testid={testIds.card}>
          <div data-testid={hidden ? testIds.hidden : testIds.visible}>
            {id}
          </div>
        </div>
      );
    },
  };
  test("it should render 5", async () => {
    const view = render(<Carousel {...props} />);

    // 5 cards should be rendered
    expect(screen.getAllByTestId(testIds.card).length).toBe(5);

    const cardsOnScreen = screen.getAllByTestId(testIds.visible);
    // visible cards should be 2
    expect(cardsOnScreen.length).toBe(props.maxCards);
    // cards in the window are ["0", "1"]
    expect(cardsOnScreen.map((d) => d.textContent)).toStrictEqual(["0", "1"]);
  });

  test("it should show 2 cards and hide 3 cards", async () => {
    const view = render(<Carousel {...props} />);

    const cardsOnScreen = screen.getAllByTestId(testIds.visible);
    expect(cardsOnScreen.length).toBe(2);

    const hiddenCards = screen.getAllByTestId(testIds.hidden);
    expect(hiddenCards.length).toBe(3);
  });

  test("it should show 2 cards starting from the given currentIndex 1", async () => {
    render(<Carousel {...props} currentIndex={1} />);

    const cardsOnScreen = screen.getAllByTestId(testIds.visible);
    // visible cards should be 2
    expect(cardsOnScreen.length).toBe(maxCards);
    // cards in the window are ["0", "1"]
    expect(cardsOnScreen.map((d) => d.textContent)).toStrictEqual(["1", "2"]);
  });

  test("clicking the next button, visible cards should switch from [0, 1] -> [2, 3]", async () => {
    render(<Carousel {...props} />);

    const cardsOnScreen = screen.getAllByTestId(testIds.visible);
    // visible cards should be 2
    expect(cardsOnScreen.length).toBe(maxCards);
    // initial cards in the window are ["0"]
    expect(cardsOnScreen.map((d) => d.textContent)).toStrictEqual(["0", "1"]);

    const arrowRight = screen.getByTestId("arrow-right");

    // first right click
    fireEvent.click(arrowRight);
    const cardsOnScreen2 = screen.getAllByTestId(testIds.visible);
    expect(cardsOnScreen2.map((d) => d.textContent)).toStrictEqual(["2", "3"]);
  });

  test("given the current index 2, clicking the next button should switch the view from [2, 3] -> [3, 4]", async () => {
    const view = render(<Carousel {...props} currentIndex={2} />);

    const cardsOnScreen = screen.getAllByTestId(testIds.visible);
    // visible cards should be 2
    expect(cardsOnScreen.length).toBe(maxCards);
    // initial cards in the window are ["2", "3"]
    expect(cardsOnScreen.map((d) => d.textContent)).toStrictEqual(["2", "3"]);

    // getting the next button
    const arrowRight = screen.getByTestId("arrow-right");

    // clicking the next button
    fireEvent.click(arrowRight);
    const cardsOnScreen2 = screen.getAllByTestId(testIds.visible);
    expect(cardsOnScreen2.map((d) => d.textContent)).toStrictEqual(["3", "4"]);
  });
});
