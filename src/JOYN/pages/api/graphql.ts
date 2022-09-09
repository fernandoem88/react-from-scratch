import { ApolloServer, gql } from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse } from "next";
import blocks from "./laneBlocks.json";
import assets from "./assets.json";
import lanes from "./lanes.json";
import fs from "fs";

import Cors from "cors";
// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const typeDefs = gql`
  type Image {
    accentColor: String
    url: String
  }
  type Asset {
    id: String
    title: String
    primaryImage: Image
    description: String
    path: String
    recommendedAssets: [Asset]
  }
  type Block {
    id: String
    headline: String
    assets: [Asset]
  }
  type Query {
    blocks: [Block]
    block(id: String): Asset
  }
`;

export const resolvers = {
  Query: {
    blocks: () => {
      // let assets: any = {};

      // lanes.blocks
      //   .filter((i) => i.id)
      //   .forEach((i) => ({
      //     id: i.id,
      //     headline: i.headline,
      //     assets:
      //       i.assets?.forEach((a) => {
      //         assets[a.id] = {
      //           id: a.id,
      //           title: a.title,
      //           primaryImage: a.primaryImage,
      //           description: a.description,
      //           path: a.path,
      //           recommendedAssets: a.recommendedAssets?.map((asset) => ({
      //             id: a.id,
      //             title: asset.title,
      //             primaryImage: asset.primaryImage,
      //             description: asset.description,
      //             path: asset.path,
      //           })),
      //         };
      //       }) ?? [],
      //   }));
      // fs.writeFileSync("./test.json", JSON.stringify(assets));
      // const blocks = lanes.blocks
      //   .filter((i) => i.id)
      //   .map((i) => ({
      //     id: i.id,
      //     headline: i.headline,
      //     assets:
      //       i.assets?.map((a) => ({
      //         id: a.id,
      //         title: a.title,
      //         primaryImage: a.primaryImage,
      //         description: a.description,
      //         path: a.path,
      //       })) ?? [],
      //   }));
      // fs.writeFileSync("./test.json", JSON.stringify(blocks));
      // return lanes.blocks;
      return blocks;
    },
    block: (_: any, args: any) => {
      return (assets as any)[args.id];
    },
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
  playground: true,
});

const graphqlHandler = apolloServer.createHandler({ path: "/api/graphql" });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);
  return graphqlHandler(req, res);
};
