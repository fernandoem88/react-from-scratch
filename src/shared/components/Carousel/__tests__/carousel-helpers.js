import { getCurrentIndexFromProps } from "../helpers";

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
