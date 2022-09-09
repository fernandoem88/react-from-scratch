import { getLanesSchema } from "./helpers";

export const fetchLanes = () =>
  fetch("/api/blocks")
    .then((r) => r.json())
    .then(getLanesSchema);
