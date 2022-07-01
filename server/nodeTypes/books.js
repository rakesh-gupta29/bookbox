import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from "graphql";

const BookType = new GraphQLObjectType({
  name: "Book_Type",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
    authors: { type: new GraphQLList(GraphQLString) },
    averageRating: { type: GraphQLInt },
    description: { type: GraphQLString },
    language: { type: GraphQLString },
    printedPageCount: { type: GraphQLInt },
    publishedDate: { type: GraphQLString },
    publisher: { type: GraphQLString },
    images: { type: new GraphQLList(GraphQLString) },
    thumbnail: { type: GraphQLString },
    mrp: { type: GraphQLInt },
    category: { type: GraphQLString },
  }),
});

export default BookType;
