export const getAssetSchema = (asset) => {
  const { recommendedAssets = [], ...baseAsset } = asset;

  return {
    asset: baseAsset,
    recommendedAssets,
  };
};
