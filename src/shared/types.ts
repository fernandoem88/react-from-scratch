export interface Lane {
  id: string;
  headline: any;
  assets: Asset[];
}

export interface PrimaryImage {
  id: string;
  accentColor: string;
  darkAccentColor: string;
  url: string;
}

export interface Asset {
  title: string;
  description: string;
  id: string;
  path: string; //"/serien/performance"
  primaryImage: PrimaryImage;
}

export interface LaneSchema extends Omit<Lane, "assets"> {
  assetsIds: string[];
}

export interface LanesSchema {
  lanes: { byId: { [K: string]: LaneSchema }; ids: string[] };
  assets: {
    byId: { [K: string]: Asset };
  };
}

export interface AssetResponse extends Asset {
  recommendedAssets: Asset[];
}

export interface AssetSchema extends Asset {
  recommendedAssets: {
    byPathId: { [Key: string]: Asset };
    pathIds: string[];
  };
}
