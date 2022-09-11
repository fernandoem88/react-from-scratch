import React from "react";
import { useParams } from "react-router-dom";
import { createPizzaCutter } from "react-pizza-cutter";
import { useFetch } from "../../shared/hooks/useFetch";
import { fetchAsset } from "./utils/actions";
import RootContainer from "./containers/RootContainer";
import { Layout } from "@src/shared/components";

export const $DetailsApp = createPizzaCutter(["asset", "status"]);

const DetailsApp = () => {
  const { assetId } = useParams();
  const { status, data } = useFetch(fetchAsset, [assetId]);

  return (
    <$DetailsApp.PizzaCutter
      slices={{
        asset: data?.asset,
        status,
      }}
    >
      <Layout
        header={<h1>Asset details</h1>}
        footer={<p>I am an awesome footer</p>}
      >
        <RootContainer />
      </Layout>
    </$DetailsApp.PizzaCutter>
  );
};

export default React.memo(DetailsApp);
