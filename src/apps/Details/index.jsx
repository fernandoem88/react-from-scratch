import React from "react";
import { useParams } from "react-router-dom";
import { createPizzaCutter } from "react-pizza-cutter";
import { useFetch } from "../../shared/hooks/useFetch";
import { fetchAsset } from "./utils/actions";
import RootContainer from "./containers/RootContainer";
import { Layout } from "@src/shared/components";

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
        asset: data?.asset,
        recommendedAssets: data?.recommendedAssets,
        status,
      }}
    >
      <Layout header={<h1>Asset details</h1>}>
        <RootContainer />
      </Layout>
    </$DetailsApp.PizzaCutter>
  );
};

export default React.memo(DetailsApp);
