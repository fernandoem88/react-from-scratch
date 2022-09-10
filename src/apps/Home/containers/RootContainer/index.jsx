import React, { useEffect } from "react";

import { $HomeApp } from "../../index";

const RootContainer = () => {
  const isLoading = $HomeApp.useSlice("isLoading");
  const error = $HomeApp.useSlice("error");
  const laneIds = $HomeApp.useSlice("laneIds");

  const deps = isLoading ? [1] : [1, 2];

  useEffect(() => {
    console.log("use effect deps variable");
  }, deps);
  if (isLoading) return <div>is loading</div>;

  return (
    <div>
      {!laneIds.length && <div>no data</div>}
      {laneIds.map((laneId) => (
        <div key={laneId}>{laneId}</div>
      ))}
    </div>
  );
};

export default React.memo(RootContainer);
