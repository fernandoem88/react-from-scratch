import { getLanesSchema } from "./helpers";

export const fetchLanes = () =>
  fetch(" http://localhost:3030/blocks")
    .then((r) => r.json())
    .then(getLanesSchema);
