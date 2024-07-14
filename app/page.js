import MainCarousel from "@/components/carousel";
import Category from "@/components/category/card";
import CategoryContainer from "@/components/category/container";
import ProductConatiner from "@/components/product/container";
import FeatureProduct from "@/components/product/featureProduct";
import ProductCard from "@/components/product/productCard";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/title";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col  p-8 ">
    <MainCarousel />
      <SectionTitle>Product</SectionTitle>
      <ProductConatiner variant="homePage">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductConatiner> 
      <Button variant="ghost" className="w-fit mx-auto mt-2 mb-4">Show more</Button>

      <div className="flex items-center justify-between ">
        <SectionTitle>Category</SectionTitle>
        <Button variant="ghost" className="w-fit self-end ">Show all</Button>
      </div>
      <CategoryContainer >
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </CategoryContainer>
      

      <SectionTitle>Best Deal</SectionTitle>
      <ProductConatiner variant="homePage">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductConatiner>
      <SectionTitle>Featured</SectionTitle>
      <FeatureProduct />
      <SectionTitle>Just for you</SectionTitle>
      <ProductConatiner variant="homePage">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductConatiner>
      
    </main>
    </>
  );
}
