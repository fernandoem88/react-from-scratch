import React from "react";

import { MessageWrapper } from "../../../../shared/components";
import { $HomeApp } from "../../index";
import LaneContainer from "../LaneContainer";
import "./style.scss";

const LanesListContainer = () => {
  const laneIds = $HomeApp.useSlice("laneIds");

  if (!laneIds) return <MessageWrapper>no lanes data</MessageWrapper>;

  return (
    <main className="lanes-list">
      {laneIds.map((laneId) => (
        <LaneContainer key={laneId} id={laneId} />
      ))}
    </main>
  );
};

export default LanesListContainer;
