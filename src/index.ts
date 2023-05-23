import "reflect-metadata";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server";
import datasource from "./db";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolver/CountryResolver";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const start = async (): Promise<void> => {
  await datasource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  await server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });

  app.listen(3001, () => {
    console.log(`listening on port 3000`);
  });
};

void start();
