import { ProductCard } from "../../components/cards";

export default function GalleryView({ data }) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center max-w-screen-xl mx-auto ">
      {data.map((i) => {
        return <ProductCard key={i.id} item={i} />;
      })}
    </div>
  );
}
