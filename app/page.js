import MainCarousel from "@/components/carousel";
import CartButton from "@/components/floatingButton/CartButton";
import Category from "@/components/category/card";
import CategoryContainer from "@/components/category/container";
import ProductConatiner from "@/components/product/container";
import FeatureProduct from "@/components/product/featureProduct";
import ProductCard from "@/components/product/productCard";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/title";
import FloatingButtonContainer from "@/components/floatingButton/FloatingButtonContainer";
import HelplineButton from "@/components/floatingButton/HelplineButton";
import { getProducts } from "@/dummy/product";

export default async function Home() {
  const products = await getProducts(20)
  
  return (
    <>
    <main className="flex min-h-screen flex-col  p-8 ">
    <MainCarousel />
      <SectionTitle>Product</SectionTitle>
      <ProductConatiner variant="homePage">
        {
          products.map((product)=>(
            <ProductCard key={product.id} data={product}/>
          ))
        }
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
      
      <FloatingButtonContainer>
        <HelplineButton />
        <CartButton />
      </FloatingButtonContainer>
    </main>
    </>
  );
}
