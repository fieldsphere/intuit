import Image from "next/image";
import { products } from "@/lib/products";

const menuItems = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#stories" },
  { label: "Company", href: "#footer" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d4d7dc] bg-white">
      <nav className="section-shell flex h-[72px] items-center justify-between gap-6">
        <a href="#" aria-label="Intuit home" className="flex min-w-28 items-center">
          <Image src="/assets/intuit-logo.svg" alt="Intuit" width={88} height={26} priority />
        </a>

        <div className="hidden flex-1 items-center justify-center gap-10 text-[15px] font-semibold text-[#393a3d] lg:flex">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-[#236cff]">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden min-w-28 items-center justify-end lg:flex">
          <a
            className="rounded-full border border-[#babec5] px-5 py-2.5 text-[15px] font-bold text-[#393a3d] transition hover:border-[#236cff] hover:text-[#236cff]"
            href="https://accounts.intuit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign in
          </a>
        </div>

        <a
          className="rounded-full border border-[#babec5] px-4 py-2 text-sm font-bold text-[#393a3d] lg:hidden"
          href="#products"
        >
          Menu
        </a>
      </nav>

      <div className="hidden border-t border-[#eceef1] bg-white lg:block">
        <div className="section-shell grid grid-cols-4 divide-x divide-[#eceef1]">
          {products.map((product) => (
            <a
              key={product.name}
              href={`#${product.name.toLowerCase().replaceAll(" ", "-")}`}
              className="group flex items-center justify-center gap-3 px-4 py-4 text-sm font-bold text-[#393a3d] transition hover:bg-[#f6f7f9]"
            >
              <Image src={product.logo} alt="" width={100} height={24} className="h-5 w-auto max-w-28" />
              <span className="sr-only">{product.name}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
