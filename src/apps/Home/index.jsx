import React from "react";
import { createPizzaCutter } from "react-pizza-cutter";
import { useFetch } from "../../shared/hooks/useFetch";
import RootContainer from "./containers/RootContainer";
import { fetchLanes } from "./utils/actions";

export const $HomeApp = createPizzaCutter([
  "assets",
  "lanes",
  "laneIds",
  "status",
]);

const HomeApp = () => {
  const { status, data } = useFetch(fetchLanes, []);

  console.log("home app data");
  console.log(status, data);
  return (
    <$HomeApp.PizzaCutter
      slices={{
        assets: data?.assets.byId ?? {},
        lanes: data?.lanes.byId ?? {},
        laneIds: data?.lanes.ids ?? [],
        status,
      }}
    >
      <RootContainer />
    </$HomeApp.PizzaCutter>
  );
};

export default HomeApp;
