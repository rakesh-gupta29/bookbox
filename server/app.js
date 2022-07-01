import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { GraphQLObjectType, GraphQLSchema } from "graphql";

import bookQuery from "./query/books.js";

const app = express();
app.use(cors());
app.use(express.json());

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    books: bookQuery,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);
export default app;
