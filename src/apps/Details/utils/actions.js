import axios from "axios";
import { API_URL } from "../../../shared/constants";
import { getAssetSchema } from "./helpers";

export const fetchAsset = async (assetId) => {
  try {
    const { data } = await axios.get(API_URL + "/assets");
    const asset = data[assetId];
    if (!asset) {
      throw { message: "asset not found" };
    }
    return getAssetSchema(asset);
  } catch (error) {
    return {
      error: {
        message:
          error?.message ?? "something went wrong while trying to fetch asset",
      },
    };
  }
};
