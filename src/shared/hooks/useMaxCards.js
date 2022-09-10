import { BREAKPOINTS } from "../constants";
import useMediaQuery from "./useMediaQuery";

const useMaxCards = () => {
  const [, breakPoint] = useMediaQuery();
  const maxCards =
    breakPoint <= BREAKPOINTS.xs
      ? 1
      : breakPoint <= BREAKPOINTS.sm
      ? 2
      : breakPoint <= BREAKPOINTS.md
      ? 3
      : breakPoint <= BREAKPOINTS.lg
      ? 4
      : breakPoint <= BREAKPOINTS.xl
      ? 5
      : breakPoint <= BREAKPOINTS.xxxl
      ? 6
      : 7;

  return maxCards;
};

export default useMaxCards;
