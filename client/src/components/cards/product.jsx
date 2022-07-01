import Image from "next/image";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
export default function ProductCard({ item }) {
  return (
    <div className="">
      <div className="p-2 w-64 h-96 bg-orangeLight">
        <div className="relative h-full w-full ">
          <Image
            layout="fill"
            src={item.thumbnail}
            loading="eager"
            alt=""
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="whitespace-nowrap overflow-ellipsis overflow-hidden ">
        <h3 className="">{item.title}</h3>
        <h4>{item.publisher}</h4>
        <div className="flex flex-nowrap justify-between items-center gap-2">
          <h3>{item.mrp}</h3>
          <div>
            <button className="mx-1 p-2 rounded-full hover:bg-smoke">
              <FaShoppingBag fill="#444444" size={26} />
            </button>
            <button className="mx-1 p-2 rounded-full hover:bg-smoke">
              <FaHeart fill="#444444" size={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
