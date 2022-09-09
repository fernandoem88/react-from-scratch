import React from "react";

import { ErrorWrapper, CardMessage } from "@src//shared/components";
import { $lanes } from "@src/shared/queries";

import * as sc from "./styled";
import LanesListContainer from "../LanesListContainer";

interface Props {}
const RootContainer: React.FC<Props> = (props) => {
  const { isLoading, error } = $lanes.useQuery();

  if (isLoading)
    return (
      <sc.MessageWrapper>
        <CardMessage>loading...</CardMessage>
      </sc.MessageWrapper>
    );

  if (error)
    return (
      <sc.MessageWrapper>
        <ErrorWrapper>
          {"An error has occurred: " + (error as any).message}
        </ErrorWrapper>
      </sc.MessageWrapper>
    );

  return <LanesListContainer />;
};
export type IRootContainerProps = Props;
export default React.memo(RootContainer);
