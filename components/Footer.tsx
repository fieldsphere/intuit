import Image from "next/image";
import { companyLinks, footerProductLinks, legalLinks, products } from "@/lib/products";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-[#d4d7dc] bg-white text-[#393a3d]">
      <div className="section-shell py-14">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.6fr]">
          <div>
            <Image src="/assets/intuit-logo.svg" alt="Intuit" width={112} height={32} />
            <p className="mt-6 max-w-md text-base leading-7">
              Intuit is the global financial technology platform that helps consumers and small businesses overcome their most important financial challenges.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn title="Products" links={footerProductLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#6b6c72]">Brands</h3>
              <div className="mt-5 grid gap-3">
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-[#d4d7dc] bg-[#f6f7f9] p-4 transition hover:bg-white hover:shadow-md"
                  >
                    <Image
                      src={product.logo}
                      alt={`${product.name} logo`}
                      width={136}
                      height={30}
                      className="h-6 w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[#d4d7dc] pt-8 text-sm text-[#6b6c72] lg:flex-row lg:items-center lg:justify-between">
          <p>Copyright 2026 Intuit Inc. All rights reserved. Demo replica.</p>
          <div className="flex flex-wrap gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#236cff]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#6b6c72]">{title}</h3>
      <ul className="mt-5 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition hover:text-[#236cff]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
