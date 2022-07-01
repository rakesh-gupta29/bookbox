import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>BookBox - Not Found </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[400px] h-[600px] text-center px-10 py-10">
        <h1 className="text-orange  text-[10vw] font-regular font-bold  tracking-[1vw]">
          404
        </h1>
        <h3 className="text-orange text-[2vw] text-center font-regular font-bold px-10 tracking-widest uppercase mb-10 ">
          Page Not Found
        </h3>

        <Link href="/" passHref>
          <a className=" bg-orangeLight text-dark font-regular text-subtitle px-10 py-4 font-bold  rounded-xl">
            Return To Home
          </a>
        </Link>
      </div>
    </div>
  );
}
