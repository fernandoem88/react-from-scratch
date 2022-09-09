import { createUseQuery } from "../helpers";
import * as services from "./service";
// import * as _selectors from "./selectors";

export default createUseQuery("Lanes", services.fetchLanes, {
  getLanesIds: (data) => data.lanes.ids || [],
  getLaneById: (data, id: string) => data.lanes.byId[id],
  getLaneAssetsIds: (data, laneId: string) => data.lanes.byId[laneId].assetsIds,
  getAssetById: (data, id: string) => data.assets.byId[id],
});
