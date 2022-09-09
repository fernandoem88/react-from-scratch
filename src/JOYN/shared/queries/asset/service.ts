import { getAssetSchema } from "./helpers";

export const fetchAssetById = (id: string) =>
  fetch("/api/block/" + id)
    .then((r) => r.json())
    .then(getAssetSchema);
