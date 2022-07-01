import books from "../data/books.js";
import Pagination from "../utils/pagination.js";

import BookType from "../nodeTypes/books.js";

export default {
  type: Pagination(BookType),
  resolve(parent, args) {
    return {
      pageInfo: {
        endCursor: "fgbejhbf",
        hasNextPage: true,
      },
      edges: {
        node: books,
      },
    };
  },
};
