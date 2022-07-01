import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaRegPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form cb ");
  };
  return (
    <footer className="bg-dark py-10 text-white ">
      <div className="max-w-[74rem]  mx-auto md:w-11/12 flex flex-wrap items-start gap-3 text-white">
        <div className="basis-64 grow-0 shrink p-3">
          <div className="h-10 w-10 md:h-12 md:w-12 relative ">
            <Image src="/icons/logo_white.svg" alt="" layout="fill" />
          </div>
          <h3 className="pt-2 uppercase tracking-widest">BookBox</h3>
          <div className="flex flex-nowrap gap-3  pt-3 sm:pt-4">
            <Link href="https://www.amazon.in" passHref>
              <a
                target="_blank"
                className=" p-2 bg-smoke rounded-full bg-opacity-30 hover:bg-opacity-50"
              >
                <FaInstagram size={24} fill="#fff" />
              </a>
            </Link>
            <Link href="https://www.amazon.in" passHref>
              <a
                target="_blank"
                className=" p-2 bg-smoke rounded-full bg-opacity-30 hover:bg-opacity-50 "
              >
                <FaFacebook size={24} fill="#fff" />
              </a>
            </Link>
            <Link href="https://www.amazon.in" passHref>
              <a
                target="_blank"
                className=" p-2 bg-smoke rounded-full bg-opacity-30 hover:bg-opacity-50 "
              >
                <FaTwitter size={24} fill="#fff" />
              </a>
            </Link>
          </div>
        </div>
        <div className="basis-56 grow-0 shrink px-3 py-2">
          <h3 className=" mb-1 sm:mb-3 text-white text-opacity-90">
            Your Account
          </h3>
          <div className="grid gap-1 ">
            <Link href="/me/dashboard" passHref>
              <a className="hover:underline hover:text-white text-gray underline-offset-4 font-light">
                Personal
              </a>
            </Link>
            <Link href="/me/info/?data=orders" passHref>
              <a className="hover:underline hover:text-white text-gray underline-offset-4 font-light">
                Orders
              </a>
            </Link>
            <Link href="/me/info/?data=cart" passHref>
              <a className="hover:underline hover:text-white text-gray underline-offset-4 font-light">
                Cart
              </a>
            </Link>
            <Link href="/me/info/?data=address" passHref>
              <a className="hover:underline hover:text-white text-gray nderline-offset-4 font-light">
                Addresses
              </a>
            </Link>
          </div>
        </div>
        <div className="basis-80  grow-0 shrink px-3 py-2">
          <h3 className=" mb-1 sm:mb-3 tracking-wide">Office</h3>
          <div className="w-11/12 max-w-md ">
            <span className="font-light text-sm sm:text-base text-gray">
              Khasra No:239/2, 240/1,Gram Sukhliya, Near Namkeen Cluster,Sanwer
              Road, Indore - 452015 {"("}M.P.{")"}
            </span>
          </div>
        </div>
        <div className="basis-80 grow-0 shrink px-3 py-2 max-w-md mr-auto">
          <h3>Subscribe to newletter</h3>
          <form
            onSubmit={handleSubmit}
            className=" border border-gray flex flex-nowrap px-1 mt-3"
          >
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-transparent  font-regular flex-1 text-lg text-white px-2 outline-none border-none "
              size="1"
            />
            <button
              type="submit"
              className="fill-gray fill-opacity-50 p-3 hover:fill-white"
            >
              <FaRegPaperPlane size={20} fill="inherit" />
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-[75rem] w-11/12  mx-auto px-3 pt-6 mt-5 text-lg flex flex-wrap items-center justify-center border-t border-white gap-y-3 divide-x divide-gray leading-5">
        <Link href="/delivery" passHref>
          <a className="hover:underline underline-offset-4 px-3 font-light text-gray">
            Delivery
          </a>
        </Link>
        <Link href="/sitemap" passHref>
          <a className="hover:underline underline-offset-4 px-3 font-light text-gray ">
            Sitemap
          </a>
        </Link>
        <Link href="/about-us" passHref>
          <a className="hover:underline underline-offset-4 px-3 font-light text-gray ">
            About Us
          </a>
        </Link>
        <Link href="/stores" passHref>
          <a className="hover:underline underline-offset-4 px-3 font-light text-gray">
            Stores
          </a>
        </Link>
      </div>
      <div className="mt-6 text-center px-3 font-light text-gray">
        &copy; All Right Reserved
      </div>
    </footer>
  );
}
