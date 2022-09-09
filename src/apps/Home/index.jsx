import React from "react";
import { useFetch } from "../../shared/hooks/useFetch";
import { fetchLanes } from "./utils/actions";

const HomeApp = () => {
  // const [data, isLoading, error] = $lanes.useQuery();
  const { isLoading, error, data } = useFetch(fetchLanes, []);

  console.log("home app data");
  console.log(isLoading, error, data);
  return <div>Home</div>;
};

export default HomeApp;
