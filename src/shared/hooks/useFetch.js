import { useEffect, useRef, useState } from "react";

export const useFetch = (
  dataFetcher,
  fetcherParams = [],
  initialState = undefined
) => {
  const [status, setStatus] = useState({ isLoading: false, error: null });

  const [data, setData] = useState(initialState);

  const depsLengthRef = useRef(fetcherParams.length);
  if (depsLengthRef.current !== fetcherParams.length) {
    console.warn("dependencies array has variable length");
  }
  useEffect(() => {
    setStatus({ isLoading: true, error: null });

    dataFetcher(...fetcherParams)
      .then((data) => {
        if (data.error) {
          throw data.error;
        }

        setData(data);
        setStatus({ isLoading: false, error: null });
      })
      .catch((error) => {
        setStatus({
          isLoading: false,
          error: { message: error?.message || "something went wrong" },
        });
      });
  }, fetcherParams);
  return { data, status };
};
