export const getAssetSchema = (asset) => {
  const { recommendedAssets = [], ...baseAsset } = asset;

  const base = {
    byPathId: { [baseAsset.path]: baseAsset },
    pathIds: [baseAsset.path],
  };
  return {
    ...baseAsset,
    recommendedAssets: recommendedAssets.reduce((acc, jjAsset) => {
      acc.byPathId[jjAsset.path] = jjAsset;
      acc.pathIds.push(jjAsset.path);
      return acc;
    }, base),
  };
};
