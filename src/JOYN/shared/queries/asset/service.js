import { getAssetSchema } from "./helpers";

export const fetchAssetById = (id) =>
  fetch("http://localhost:3030/assets/" + id)
    .then((r) => r.json())
    .then(getAssetSchema);
