import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const PageInfoType = new GraphQLObjectType({
  name: "PageFormatType",
  fields: {
    hasNextPage: { type: GraphQLBoolean },
    endCursor: { type: new GraphQLNonNull(GraphQLString) },
  },
});
const EdgeType = (itemType) =>
  new GraphQLObjectType({
    name: "EdgeType",
    fields: {
      node: { type: new GraphQLList(itemType) },
    },
  });

const Pagination = (itemType) =>
  new GraphQLObjectType({
    name: "PageFormat",
    fields: {
      edges: { type: EdgeType(itemType) },
      pageInfo: { type: PageInfoType },
    },
  });

export default Pagination;
