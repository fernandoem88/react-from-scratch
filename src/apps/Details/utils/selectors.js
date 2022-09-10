export const getAsset = ({ recommendedAssets, ...asset }) => asset;

export const getRecommendedPathIds = (asset, ignoredPath = "") => {
  const pathIds = asset.recommendedAssets.pathIds;
  return ignoredPath ? pathIds.filter((pId) => pId !== ignoredPath) : pathIds;
};

export const getRecommendedAssetByPathId = (asset, pathId) =>
  asset.recommendedAssets.byPathId[pathId];

export const getSelectedAssetByPathId = (asset, pathId = "") => {
  return pathId ? getRecommendedAssetByPathId(asset, pathId) : getAsset(asset);
};
