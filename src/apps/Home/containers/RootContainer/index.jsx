import React from "react";
import { MessageWrapper } from "../../../../shared/components";

import { $HomeApp } from "../../index";
import LanesListContainer from "../LanesListContainer";

const RootContainer = () => {
  const { isLoading, error } = $HomeApp.useSlice("status");

  if (isLoading) return <MessageWrapper>loading...</MessageWrapper>;

  if (error) return <MessageWrapper>{error?.message}</MessageWrapper>;

  return <LanesListContainer />;
};

export default React.memo(RootContainer);
