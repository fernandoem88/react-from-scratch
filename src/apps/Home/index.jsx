import React from "react";
import { createPizzaCutter } from "react-pizza-cutter";
import { useFetch } from "../../shared/hooks/useFetch";
import RootContainer from "./containers/RootContainer";
import { fetchLanes } from "./utils/actions";

export const $HomeApp = createPizzaCutter([
  "assets",
  "lanes",
  "laneIds",
  "isLoading",
  "error",
]);

const HomeApp = () => {
  const { isLoading, error, data } = useFetch(fetchLanes, []);

  console.log("home app data");
  console.log(isLoading, error, data);
  return (
    <$HomeApp.PizzaCutter
      slices={{
        assets: data?.assets.byId ?? {},
        lanes: data?.lanes.byId ?? {},
        laneIds: data?.lanes.ids ?? [],
        isLoading,
        error,
      }}
    >
      <RootContainer />
    </$HomeApp.PizzaCutter>
  );
};

export default HomeApp;
