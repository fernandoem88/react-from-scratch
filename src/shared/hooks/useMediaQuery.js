import { useCallback, useEffect, useState } from "react";
import jsonToMq from "json2mq";
import { BREAKPOINTS } from "../constants";

const getMatches = (query) => {
  // Prevents SSR issues
  if (!query) return false;
  if (typeof window !== "undefined") {
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
      return key;
    }
  }
  return "xs";
};

const useMediaQuery = () => {
  const [breakPoint, setBreakPoint] = useState(getBreakPoint);

  const handleChange = useCallback(() => {
    const bp = getBreakPoint();
    setBreakPoint(bp);
  }, []);

  useEffect(() => {
    const medias = Object.entries(BREAKPOINTS).map(([key, value]) => {
      const qs = jsonToMq({ minWidth: value });
      const matchMedia = window.matchMedia(qs);
      return [key, matchMedia];
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

  return [breakPoint, BREAKPOINTS[breakPoint]];
};

export default useMediaQuery;
