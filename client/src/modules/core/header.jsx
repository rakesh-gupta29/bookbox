import Link from "next/link";
import Image from "next/image";
import {
  FaUserCircle,
  FaShoppingBag,
  FaSearch,
  FaBell,
  FaBars,
} from "react-icons/fa";
import { useUIContext } from "../context";
export default function Header() {
  const { mountSidebar, mountModal } = useUIContext();
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-[1] bg-white ">
        <nav className=" max-w-[100rem] md:w-11/12 mx-auto flex flex-nowrap gap-3 items-center justify-between px-3 py-3">
          <Link href="/" passHref>
            <a className="relative h-10 w-10">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                layout="fill"
                priority="eager"
              />
            </a>
          </Link>
          <div className="basis-[30rem] grow-0 shrink flex-nowrap px-3 bg-orangeLight rounded-full sm:flex hidden">
            <input
              type="text"
              size="1"
              placeholder="Search Your Favorites"
              className="bg-transparent font-regular text-lg px-2 text-dark flex-1 outline-none border-none py-2 placeholder:text-gray"
            />
            <button className="p-2">
              <FaSearch size={20} fill="#FB6D3B" />
            </button>
          </div>
          <div className=" flex  flex-wrap items-center justify-center gap-4 sm:gap-8">
            <button
              onClick={() => mountModal("SEARCH_MODAL")}
              className=" p-2 hover:bg-opacity-50 rounded-full  block md:hidden bg-orangeLight "
            >
              <FaSearch size={24} fill="#FB6D3B" />
            </button>
            <button
              onClick={() => mountModal("LOGIN_MODAL")}
              className=" p-2 hover:bg-opacity-50 rounded-full  bg-orangeLight "
            >
              <FaUserCircle size={24} fill="#FB6D3B" />
            </button>
            <button
              onClick={() => mountSidebar("CART_SIDEBAR")}
              className=" p-2 hover:bg-opacity-50 rounded-full  bg-orangeLight "
            >
              <FaShoppingBag size={24} fill="#FB6D3B" />
            </button>

            <button
              onClick={() => mountModal("NOTIFICATION_SIDEBAR")}
              className="p-2 hover:bg-opacity-50 rounded-full  bg-orangeLight  hidden sm:block"
            >
              <FaBell size={24} fill="#FB6D3B" />
            </button>
            <button
              onClick={() => mountSidebar("MOBILE_NAV_SIDEBAR")}
              className=" p-2 hover:bg-opacity-50 rounded-full  bg-orangeLight block md:hidden  "
            >
              <FaBars size={24} fill="#FB6D3B" />
            </button>
          </div>
        </nav>
      </header>
      <section className="max-w-[100rem] mx-auto px-3 ">
        <section className="py-2 flex items-center justify-start gap-4  max-w-[50rem] px-1 md:w-11/12  overflow-auto">
          <button className="flex flex-nowrap gap-2 items-center text-lg font-regular text-dark px-3 py-1">
            <FaBars size={20} fill="#444444" />
            Books
          </button>
          <Link href="/authors" passHref>
            <a>Authors</a>
          </Link>
          <Link href="/articles" passHref>
            <a>Articles</a>
          </Link>
          <Link href="/for-you" passHref>
            <a className="whitespace-nowrap">For You</a>
          </Link>
          <Link href="/offers" passHref>
            <a>Offers</a>
          </Link>
        </section>
      </section>
    </>
  );
}
