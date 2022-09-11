import axios from "axios";
import { API_URL } from "@src/shared/constants";

export const fetchAsset = async (assetId) => {
  try {
    const { data } = await axios.get(API_URL + "/assets");
    const asset = data[assetId];
    if (!asset) {
      throw { message: "asset not found" };
    }
    const { recommendedAssets = [], ...baseAsset } = asset;
    return { asset: baseAsset };
  } catch (error) {
    return {
      error: {
        message:
          error?.message ?? "something went wrong while trying to fetch asset",
      },
    };
  }
};
