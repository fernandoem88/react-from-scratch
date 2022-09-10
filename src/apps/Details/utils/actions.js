import axios from "axios";
import { API_URL } from "../../../shared/constants";
import { getAssetSchema } from "./helpers";

export const fetchLanes = async (assetId) => {
  try {
    const { data } = await axios.get(API_URL + "/assets/" + assetId);

    return getAssetSchema(data);
  } catch (error) {
    return {
      error: {
        message:
          error?.message ?? "something went wrong while trying to fetch asset",
      },
    };
  }
};
