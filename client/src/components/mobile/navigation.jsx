import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useUIContext } from "../../modules/context";
const categories = [
  { target: "category/sports", text: "Sports" },
  { target: "category/horror", text: "Horror" },
  { target: "category/fiction", text: "Fiction" },
  { target: "category/sci-fi", text: "Sci-Fi" },
  { target: "category/autobiography", text: "Biography" },
];
const authors = [
  { target: "category/sports", text: "Sports" },
  { target: "category/horror", text: "Horror" },
  { target: "category/fiction", text: "Fiction" },
  { target: "category/sci-fi", text: "Sci-Fi" },
  { target: "category/autobiography", text: "Biography" },
];
export default function MobileNavigation() {
  const [activeTab, setActiveTab] = useState(0);
  const { unmountOverlay } = useUIContext();

  const handleOpen = (value) => {
    setActiveTab(activeTab === value ? 0 : value);
  };

  const NavLink = ({ target, text }) => {
    return (
      <Link href={target} passHref>
        <a className="text-lg py-1 hover:underline">{text}</a>
      </Link>
    );
  };
  return (
    <section className="text-gray-900 h-screen relative flex flex-col flex-nowrap ">
      <div className="py-5 px-5 border-b border-smoke flex flex-nowrap items-center justify-end">
        <button className=" rounded-full" onClick={unmountOverlay}>
          <IoCloseCircleOutline fill="#444444" size={30} />
        </button>
      </div>
      <div className="flex-1 overflow-auto pb-28">
        <Accordion
          open={activeTab === 1}
          onClick={() => handleOpen(1)}
          className="px-1"
        >
          <AccordionHeader className="pr-2">
            <span className="text-dark font-regular text-lg font-light px-2">
              Catogories
            </span>
          </AccordionHeader>
          <AccordionBody className="px-3 py-2 pb-2 rounded-lg my-2 flex flex-col flex-nowrap bg-smoke  bg-opacity-50">
            {categories.map((i, index) => {
              return <NavLink key={index} target={i.target} text={i.text} />;
            })}
          </AccordionBody>
        </Accordion>
        <Accordion
          open={activeTab === 2}
          onClick={() => handleOpen(2)}
          className="px-1"
        >
          <AccordionHeader className="pr-2">
            <span className="text-dark font-regular font-light text-lg px-2">
              Authors
            </span>
          </AccordionHeader>
          <AccordionBody className="px-3 py-2 pb-2 rounded-lg my-2 flex flex-col flex-nowrap bg-smoke  bg-opacity-50">
            {authors.map((i, index) => {
              return <NavLink key={index} target={i.target} text={i.text} />;
            })}
          </AccordionBody>
        </Accordion>
        <div className=" grid gap-1  divide-y divide-smoke px-1 border-b border-smoke">
          <Link passHref href="/notifications">
            <a className="py-3 px-2 text-lg text-dark hover:underline">
              {" "}
              Notifications
            </a>
          </Link>
          <Link passHref href="/trending">
            <a className="py-3 px-2 text-lg text-dark hover:underline">
              Trending
            </a>
          </Link>
          <Link passHref href="/best-offers">
            <a className="py-3 px-2 text-lg text-dark hover:underline">
              Best Offers
            </a>
          </Link>
        </div>
        <Accordion
          open={activeTab === 3}
          onClick={() => handleOpen(3)}
          className="px-1"
        >
          <AccordionHeader className="pr-2">
            <span className="text-dark font-regular font-light text-lg px-2">
              My Account
            </span>
          </AccordionHeader>
          <AccordionBody className="px-3 py-2 pb-2 rounded-lg my-2 flex flex-col flex-nowrap bg-smoke  bg-opacity-50">
            <NavLink target="/me/cart" text="Cart" />
            <NavLink target="/me/wishlist" text="Wishlist" />
            <NavLink target="/me/orders" text="Orders" />
          </AccordionBody>
        </Accordion>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-orange text-white  mt-auto py-4  grid place-content-center  text-subtitle uppercase tracking-wide font-bold ">
        <Link passHref href="/checkout">
          <div className="flex flex-nowrap items-center gap-2 ">
            <a>Checkout </a>
            <svg
              className="h-8 w-10 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}
