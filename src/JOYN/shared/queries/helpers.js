import { useMemo } from "react";
import { useQuery } from "react-query";

const AutoRefreshTime = 60000;
const getDefaultOptions = () => ({ staleTime: AutoRefreshTime });

export const createUseQuery = (key, dataFetcher, selectors) => {
  const useCustomQuery = (...args) => {
    const [p0, p1] = args;
    const [dfParams = [], opts = {}] = Array.isArray(p0)
      ? [p0, p1]
      : [undefined, p0];

    const keys = useMemo(() => [key, ...dfParams], [dfParams]);

    return useQuery(keys, () => dataFetcher(...dfParams), {
      ...getDefaultOptions(),
      ...opts,
    });
  };

  /** Selectors section */

  const useSelector = (...args) => {
    const [p0, p1, p2] = args;

    const flattedArgs = Array.isArray(p0) ? [p0, p1, p2] : [undefined, p0, p1];

    const [dfParams = [], selector, opts = {}] = flattedArgs;

    const doFetch = () => dataFetcher(...dfParams);

    const useQueryOptions = useMemo(() => {
      return { ...getDefaultOptions(), ...opts, selected: selector(data) };
    }, [opts]);

    const { isLoading, data, error, ...helpers } = useQuery(
      [key, ...dfParams],
      doFetch,
      useQueryOptions
    );

    return [data, isLoading, error, helpers];
  };

  return { useSelector, useQuery: useCustomQuery };
};
