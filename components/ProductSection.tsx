import Image from "next/image";
import type { Product } from "@/lib/products";
import { Reveal } from "@/components/Reveal";

const accentClasses: Record<Product["accent"], { badge: string; panel: string; blob: string; button: string }> = {
  turbo: {
    badge: "bg-[#eaf2ff] text-[#205ea8]",
    panel: "bg-[#dce9ff]",
    blob: "bg-[#236cff]",
    button: "bg-[#236cff] hover:bg-[#0a57ff]"
  },
  credit: {
    badge: "bg-[#e9f7eb] text-[#008600]",
    panel: "bg-[#dff4df]",
    blob: "bg-[#008600]",
    button: "bg-[#008600] hover:bg-[#006f00]"
  },
  quickbooks: {
    badge: "bg-[#e9f7eb] text-[#2ca01c]",
    panel: "bg-[#e3f6df]",
    blob: "bg-[#2ca01c]",
    button: "bg-[#2ca01c] hover:bg-[#238817]"
  },
  mailchimp: {
    badge: "bg-[#fff6bf] text-[#241c15]",
    panel: "bg-[#ffe01b]",
    blob: "bg-[#241c15]",
    button: "bg-[#241c15] hover:bg-[#3f3329]"
  }
};

type ProductSectionProps = {
  product: Product;
  index: number;
};

export function ProductSection({ product, index }: ProductSectionProps) {
  const accent = accentClasses[product.accent];
  const isReversed = index % 2 === 1;
  const sectionId = product.name.toLowerCase().replaceAll(" ", "-");

  return (
    <section id={sectionId} className="border-t border-[#eceef1] bg-white py-16 lg:py-24">
      <div className={`section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal>
          <div className="mx-auto max-w-xl lg:mx-0">
            <span className={`inline-flex rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.14em] ${accent.badge}`}>
              {product.promise}
            </span>
            <div className="mt-8">
              <Image src={product.logo} alt={`${product.name} logo`} width={146} height={34} className="h-8 w-auto" />
            </div>
            <h2 className="text-balance mt-8 text-[40px] font-black leading-[1.02] tracking-[-0.045em] text-[#101820] sm:text-[56px]">
              {product.heading}
            </h2>
            <p className="mt-6 text-xl leading-8 text-[#393a3d]">{product.body}</p>

            <a
              className={`mt-9 inline-flex rounded-full px-7 py-4 text-base font-bold text-white transition ${accent.button}`}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.cta}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={`relative overflow-hidden rounded-[36px] ${accent.panel} p-5 lg:p-8`}>
            <div className={`absolute -right-20 -top-20 h-52 w-52 rounded-full ${accent.blob} opacity-15`} />
            <div className={`absolute -bottom-24 left-8 h-56 w-56 rounded-full ${accent.blob} opacity-10`} />
            <div className="relative grid items-end gap-5 md:grid-cols-[0.72fr_1fr]">
              <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(16,24,32,0.18)]">
                <img src={product.customerImage} alt={product.customerAlt} className="h-full min-h-[390px] w-full object-cover" />
              </div>
              <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,32,0.12)]">
                <Image
                  src={product.image}
                  alt={`${product.name} product experience`}
                  width={620}
                  height={520}
                  className="h-auto w-full rounded-[20px]"
                />
                <div className="mt-5 rounded-2xl border border-[#eceef1] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6b6c72]">{product.eyebrow}</p>
                  <p className="mt-2 text-lg font-black tracking-[-0.02em] text-[#101820]">{product.promise}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
