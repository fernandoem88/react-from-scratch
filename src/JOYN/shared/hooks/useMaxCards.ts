import { useEffect } from "react";
import { BREAKPOINTS } from "../constants";
import useMediaQuery from "./useMediaQuery";

// <HookWrapp>

const useMaxCards = () => {
  useEffect(() => {
    return () => {};
  }, []);

  const [, breakPoint] = useMediaQuery();
  const maxCards =
    breakPoint <= BREAKPOINTS.sm
      ? 1
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
