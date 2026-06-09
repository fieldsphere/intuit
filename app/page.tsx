import { CustomerStories } from "@/components/CustomerStories";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { NewsCards } from "@/components/NewsCards";
import { ProductShowcase } from "@/components/ProductShowcase";
import { SegmentTabs } from "@/components/SegmentTabs";
import { SuccessTogether } from "@/components/SuccessTogether";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductShowcase />
        <SegmentTabs />
        <CustomerStories />
        <NewsCards />
        <SuccessTogether />
      </main>
      <Footer />
    </>
  );
}
