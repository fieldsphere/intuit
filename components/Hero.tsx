import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/products";

export function Hero() {
  return (
    <section id="demo" className="overflow-hidden bg-[#f6f7f9]">
      <div className="section-shell py-16 text-center lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h1 className="text-balance text-[48px] font-black leading-[0.95] tracking-[-0.055em] text-[#101820] sm:text-[68px] lg:text-[86px]">
              Outdo your financial goals&mdash;all in one place.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-[#393a3d]">
              The Intuit platform puts a team of AI agents and trusted experts by your side.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                className="rounded-full bg-[#236cff] px-8 py-4 text-center text-base font-bold text-white transition hover:bg-[#0a57ff]"
                href="#products"
              >
                See it in action
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto mt-14 max-w-[960px]">
            <div className="absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d8e5ff] blur-3xl" />
            <div className="relative rounded-[36px] border border-white bg-white p-4 shadow-[0_32px_80px_rgba(16,24,32,0.16)]">
              <div className="overflow-hidden rounded-[28px] bg-[#dce9ff]">
                <img
                  src="https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/intuit-fuse-web-product-screen-784x784.jpg"
                  alt="Intuit platform product screen"
                  className="mx-auto aspect-[16/9] h-auto w-full object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-[#eceef1] bg-white p-4 text-left md:grid-cols-4">
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={`#${product.name.toLowerCase().replaceAll(" ", "-")}`}
                    className="rounded-2xl border border-[#eceef1] p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Image src={product.logo} alt={product.name} width={120} height={28} className="h-6 w-auto" />
                    <p className="mt-3 text-sm font-bold text-[#393a3d]">{product.promise}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
