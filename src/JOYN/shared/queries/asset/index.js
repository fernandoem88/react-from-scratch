import { createUseQuery } from "../helpers";
import { fetchAssetById } from "./service";

export default createUseQuery("Asset", fetchAssetById);
