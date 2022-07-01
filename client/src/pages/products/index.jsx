import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ProductGalleryView } from "../../blades/products";
export default function ProductListing({ books }) {
  return (
    <div>
      <Head>
        <title>Bookbox- Products </title>
        <meta name="description" content="Browse All products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductGalleryView data={books} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const client = new ApolloClient({
    uri: "https://shrouded-journey-89320.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        books(offset: ${(query.page - 1) * 10}, count: 12) {
          id
          title
          mrp
          thumbnail
          publisher
        }
      }
    `,
  });
  return {
    props: {
      books: data.books,
    },
  };
}
