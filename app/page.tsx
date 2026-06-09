import { CustomerStories } from "@/components/CustomerStories";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { NewsCards } from "@/components/NewsCards";
import { ProductSection } from "@/components/ProductSection";
import { PromoBar } from "@/components/PromoBar";
import { SegmentTabs } from "@/components/SegmentTabs";
import { SuccessTogether } from "@/components/SuccessTogether";
import { ValueTabs } from "@/components/ValueTabs";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        <Hero />
        <div id="products">
          {products.map((product, index) => (
            <ProductSection key={product.name} product={product} index={index} />
          ))}
        </div>
        <ValueTabs />
        <SegmentTabs />
        <CustomerStories />
        <NewsCards />
        <SuccessTogether />
      </main>
      <Footer />
    </>
  );
}
