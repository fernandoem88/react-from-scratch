import { useEffect, useRef, useState } from "react";

export const useFetch = (
  dataFetcher,
  fetcherParams = [],
  initialState = undefined
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialState);

  const depsLengthRef = useRef(fetcherParams.length);
  if (depsLengthRef.current !== fetcherParams.length) {
    console.warn("dependencies array has variable length");
  }
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    dataFetcher(...fetcherParams)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, fetcherParams);
  return { isLoading, data, error };
};
