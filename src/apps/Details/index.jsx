import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { createPizzaCutter } from "react-pizza-cutter";
import { useFetch } from "../../shared/hooks/useFetch";
import { fetchAsset } from "./utils/actions";

export const $DetailsApp = createPizzaCutter(["asset", "isLoading", "error"]);

const DetailsApp = () => {
  const assetId = useParams();
  const { isLoading, error, data } = useFetch(fetchAsset, [assetId]);

  console.log("Details app data");
  console.log(isLoading, error, data);
  return (
    <$DetailsApp.PizzaCutter
      slices={{
        assets: data ?? {},
        isLoading,
        error,
      }}
    >
      <div>Details page</div>
    </$DetailsApp.PizzaCutter>
  );
};

export default DetailsApp;
