import Image from "next/image";

const menuItems = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#stories" },
  { label: "Support", href: "#footer" },
  { label: "Company", href: "#footer" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d4d7dc] bg-white">
      <nav className="section-shell flex h-16 items-center justify-between gap-6">
        <a href="#" aria-label="Intuit home" className="flex items-center">
          <Image src="/assets/intuit-logo.svg" alt="Intuit" width={82} height={24} priority />
        </a>

        <div className="hidden flex-1 items-center justify-center gap-8 text-[15px] font-semibold text-[#393a3d] lg:flex">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="group inline-flex items-center gap-2 py-5 transition hover:text-[#236cff]">
              {item.label}
              <span
                aria-hidden="true"
                className="mt-[-3px] h-2 w-2 rotate-45 border-b-2 border-r-2 border-current opacity-70 transition group-hover:translate-y-0.5"
              />
            </a>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a href="#products" className="group flex items-center gap-2 text-[15px] font-semibold text-[#393a3d] transition hover:text-[#236cff]">
            <span className="relative block h-4 w-4 rounded-full border-2 border-current">
              <span className="absolute -bottom-1 -right-1 h-2 w-0.5 rotate-[-45deg] rounded-full bg-current" />
            </span>
            Search
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-[#babec5] px-5 py-2 text-[15px] font-bold text-[#393a3d] transition hover:border-[#236cff] hover:text-[#236cff]"
            href="https://accounts.intuit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-current text-[10px] font-black">
              i
            </span>
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
    </header>
  );
}
