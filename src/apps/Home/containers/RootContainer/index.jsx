import React from "react";
import { Layout, MessageWrapper } from "@src/shared/components";

import { $HomeApp } from "../../index";
import LanesListContainer from "../LanesListContainer";

const RootContainer = () => {
  const { isLoading, error } = $HomeApp.useSlice("status");

  if (isLoading) return <MessageWrapper>loading...</MessageWrapper>;

  if (error) return <MessageWrapper>{error?.message}</MessageWrapper>;

  return (
    <Layout>
      <LanesListContainer />
    </Layout>
  );
};

export default React.memo(RootContainer);
