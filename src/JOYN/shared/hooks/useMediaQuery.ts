import { useCallback, useEffect, useMemo, useState } from "react";
import jsonToMq from "json2mq";
import { BREAKPOINTS } from "../constants";

const getMatches = (query: string): boolean => {
  // Prevents SSR issues
  if (!query) return false;
  if (!!window) {
    return window.matchMedia(query).matches;
  }
  return false;
};
const getBreakPoint = () => {
  // desc
  const sortedEntries = Object.entries(BREAKPOINTS).sort(([, bp1], [, bp2]) =>
    bp1 < bp2 ? 1 : -1
  );
  for (let [key, value] of sortedEntries) {
    const matches = getMatches(jsonToMq({ minWidth: value }));
    if (matches) {
      return key as keyof typeof BREAKPOINTS;
    }
  }
  return "xs";
};

const useMediaQuery = () => {
  const [breakPoint, setBreakPoint] = useState<keyof typeof BREAKPOINTS>(
    getBreakPoint
  );

  const handleChange = useCallback(() => {
    const bp = getBreakPoint();
    setBreakPoint(bp);
  }, []);

  useEffect(() => {
    const medias = Object.entries(BREAKPOINTS).map(([key, value]) => {
      const qs = jsonToMq({ minWidth: value });
      const matchMedia = window.matchMedia(qs);
      return [key, matchMedia] as const;
    });

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    medias.forEach(([, matchMedia]) =>
      matchMedia.addEventListener("change", handleChange)
    );

    return () => {
      medias.forEach(([, matchMedia]) =>
        matchMedia.removeEventListener("change", handleChange)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(() => [breakPoint, BREAKPOINTS[breakPoint]] as const, [
    breakPoint,
  ]);
};

export default useMediaQuery;
