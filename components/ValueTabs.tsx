import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/products";

export function ValueTabs() {
  return (
    <section id="values" className="border-y border-[#eceef1] bg-[#f6f7f9] py-10">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-3 md:grid-cols-4">
            {products.map((product) => (
              <a
                key={product.name}
                href={`#${product.name.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-full border border-[#d4d7dc] bg-white px-5 py-4 text-center text-base font-black text-[#101820] shadow-sm transition hover:-translate-y-0.5 hover:border-[#236cff]"
              >
                {product.promise}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
