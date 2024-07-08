import ProductConatiner from "@/components/product/container";
import ProductCard from "@/components/product/productCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <ProductConatiner>
      <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductConatiner>
    </main>
  );
}
