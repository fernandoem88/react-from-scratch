import { createUseQuery } from "../helpers";
import * as services from "./service";
import * as selectors from "./selectors";

export default createUseQuery("Asset", services.fetchAssetById, selectors);
