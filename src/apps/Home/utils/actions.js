import axios from "axios";
import { API_URL } from "@src/shared/constants";

import { getLanesSchema } from "./helpers";

export const fetchLanes = async () => {
  try {
    const { data } = await axios.get(API_URL + "/blocks");
    data.splice(3);
    return getLanesSchema(data);
  } catch (error) {
    return {
      error: {
        message:
          error?.message ?? "something went wrong while trying to fetch lanes",
      },
    };
  }
};
