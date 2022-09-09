import { AssetResponse, AssetSchema } from "../../types";

export const getAssetSchema = (asset: AssetResponse): AssetSchema => {
  const { recommendedAssets = [], ...baseAsset } = asset;

  const base = {
    byPathId: { [baseAsset.path]: baseAsset },
    pathIds: [baseAsset.path],
  };
  return {
    ...baseAsset,
    recommendedAssets: recommendedAssets.reduce((acc, ast) => {
      acc.byPathId[ast.path] = ast;
      acc.pathIds.push(ast.path);
      return acc;
    }, base),
  };
};
