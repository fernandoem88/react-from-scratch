import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { createPizzaCutter } from "react-pizza-cutter";
import { useFetch } from "../../shared/hooks/useFetch";
import { fetchAsset } from "./utils/actions";

export const $DetailsApp = createPizzaCutter([
  "asset",
  "recommendedAssets",
  "status",
]);

const DetailsApp = () => {
  const { assetId } = useParams();
  const { status, data } = useFetch(fetchAsset, [assetId]);

  console.log("Details app data");
  console.log(status, data);
  return (
    <$DetailsApp.PizzaCutter
      slices={{
        assets: data?.assets,
        recommendedAssets: data?.recommendedAssets,
        status,
      }}
    >
      <div>Details page</div>
    </$DetailsApp.PizzaCutter>
  );
};

export default React.memo(DetailsApp);
