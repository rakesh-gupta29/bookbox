import Head from "next/head";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <Head>
        <title>Bookbox Frontend - Product</title>
        <meta name="description" content="Shop All Favorites Books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-title ">product Details</h1>
    </div>
  );
}

export async function getStaticPaths({ params, locales, locale, preview }) {
  const config = { locale, locales };
  return {
    fallback: true,
    paths: [],
  };
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
