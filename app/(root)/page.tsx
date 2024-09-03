import CarouselSlider from "@/components/CarouselSlider";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
    <CarouselSlider/>
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";

