import React from "react";

import { MessageWrapper } from "../../../../shared/components";
import { $HomeApp } from "../../index";
import "./style.scss";

const LanesListContainer = () => {
  const laneIds = $HomeApp.useSlice("laneIds");

  if (!laneIds) return <MessageWrapper>no lanes data</MessageWrapper>;

  return (
    <div className="lanes-list">
      {laneIds.map((laneId) => (
        <LaneContainer key={laneId} id={laneId} />
      ))}
    </div>
  );
};

export default LanesListContainer;
