"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";

const showcaseStyles: Record<
  Product["accent"],
  {
    image: string;
    icon: string;
    iconClass: string;
    gradient: string;
    glow: string;
    button: string;
    panel: string;
  }
> = {
  turbo: {
    image: "/assets/product-turbotax.png",
    icon: "tt",
    iconClass: "bg-[#d52b1e] text-white",
    gradient: "from-[#ff7f98] via-[#d6c8ff] to-[#3f78ff]",
    glow: "bg-[#f5a3b3]",
    button: "bg-[#002d4c] hover:bg-[#06446f]",
    panel: "from-[#f4f8ff] via-[#f6f1ff] to-[#eef5ff]"
  },
  credit: {
    image: "/assets/product-creditkarma.png",
    icon: "ck",
    iconClass: "bg-[#42d65f] text-white",
    gradient: "from-[#62df7e] via-[#9fead0] to-[#39a5ff]",
    glow: "bg-[#7fe49a]",
    button: "bg-[#008600] hover:bg-[#006f00]",
    panel: "from-[#f3fff5] via-[#f5fbff] to-[#eef5ff]"
  },
  quickbooks: {
    image: "/assets/product-quickbooks.png",
    icon: "qb",
    iconClass: "bg-[#2ca01c] text-white",
    gradient: "from-[#5bd64d] via-[#b3ead1] to-[#4f8dff]",
    glow: "bg-[#8edc7b]",
    button: "bg-[#2ca01c] hover:bg-[#238817]",
    panel: "from-[#f2fff0] via-[#f5fbff] to-[#eef5ff]"
  },
  mailchimp: {
    image: "/assets/product-mailchimp.png",
    icon: "m",
    iconClass: "bg-[#ffe01b] text-[#241c15]",
    gradient: "from-[#ffe01b] via-[#ffd6a3] to-[#3f78ff]",
    glow: "bg-[#ffe01b]",
    button: "bg-[#241c15] hover:bg-[#3f3329]",
    panel: "from-[#fff9d7] via-[#fff6ed] to-[#eef5ff]"
  }
};

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];
  const activeStyle = showcaseStyles[activeProduct.accent];

  return (
    <section id="products" className={`overflow-hidden bg-gradient-to-br ${activeStyle.panel} py-16 lg:py-24`}>
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative lg:min-h-[520px]">
          <div className={`absolute left-[23%] top-0 h-[500px] w-[170px] bg-gradient-to-b ${activeStyle.gradient} sm:left-[31%] lg:left-[48%] lg:top-8 lg:h-[470px] lg:w-[240px]`} />
          <div className={`absolute left-[18%] top-16 h-72 w-72 rounded-full ${activeStyle.glow} opacity-30 blur-3xl sm:left-[26%] lg:left-[35%]`} />

          <div className="relative z-10 mx-auto w-[min(72vw,360px)] overflow-hidden shadow-[0_24px_60px_rgba(16,24,32,0.16)] lg:ml-[44%] lg:mt-0 lg:w-[286px]">
            <Image
              key={activeProduct.name}
              src={activeStyle.image}
              alt={activeProduct.customerAlt}
              width={286}
              height={508}
              className="h-auto w-full"
              priority
            />
          </div>

          <div
            role="tablist"
            aria-label="Intuit product benefits"
            className="relative z-20 mx-auto mt-10 flex w-full max-w-5xl items-center justify-between gap-4 lg:absolute lg:left-0 lg:top-16 lg:mt-0 lg:grid lg:w-[320px] lg:max-w-sm lg:gap-3"
          >
            {products.map((product, index) => {
              const isActive = index === activeIndex;
              const style = showcaseStyles[product.accent];

              return (
                <button
                  key={product.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`flex h-16 items-center rounded-full text-left text-sm font-semibold transition lg:min-h-14 lg:w-full lg:gap-4 lg:px-5 ${
                    isActive
                      ? "min-w-[230px] justify-start gap-4 bg-white px-6 text-[#101820] shadow-[0_18px_45px_rgba(16,24,32,0.14)] lg:min-w-0"
                      : "w-16 justify-center bg-white/70 px-0 text-[#6b6c72] shadow-[0_14px_35px_rgba(16,24,32,0.08)] hover:bg-white hover:text-[#101820] lg:justify-start lg:bg-transparent lg:shadow-none lg:hover:bg-white/65"
                  }`}
                >
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${style.iconClass}`}>
                    {style.icon}
                  </span>
                  <span className={`${isActive ? "block" : "hidden"} flex-1 lg:block`}>{product.promise}</span>
                  {isActive ? <span className="text-lg leading-none">&gt;</span> : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto max-w-lg lg:mx-0">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#393a3d]">{activeProduct.eyebrow}</p>
          <h2 className="mt-5 text-balance text-[40px] font-medium leading-[1.08] tracking-[-0.045em] text-[#302a33] sm:text-[52px]">
            {activeProduct.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-[#393a3d]">{activeProduct.body}</p>
          <a
            className={`mt-8 inline-flex rounded px-7 py-4 text-sm font-bold !text-white transition ${activeStyle.button}`}
            href={activeProduct.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {activeProduct.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
