import { createUseQuery } from "../helpers";
import * as services from "./service";

export default createUseQuery("Lanes", services.fetchLanes);
