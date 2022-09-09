export const getLanesSchema = (lanes = []) => {
  const emptyLanesSchema = {
    lanes: {
      byId: {},
      ids: [],
    },
    assets: { byId: {} },
  };
  const lanesSchema = lanes.reduce((acc, lane) => {
    const { assets = [], ...l } = lane;
    const assetsIds = [];
    assets.forEach((ast) => {
      // updating assetsIds by pushing the new assetId
      assetsIds.push(ast.id);
      // store asset by id
      acc.assets.byId[ast.id] = ast;
    });

    acc.lanes.byId[lane.id] = {
      ...l,
      assetsIds,
    };
    acc.lanes.ids.push(lane.id);
    return acc;
  }, emptyLanesSchema);
  return lanesSchema;
};
