import { newsCards } from "@/lib/stories";
import { Reveal } from "@/components/Reveal";

export function NewsCards() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-balance max-w-3xl text-[40px] font-black leading-[1.02] tracking-[-0.045em] text-[#101820] sm:text-[56px]">
                Innovation, action, and impact
              </h2>
            </div>
            <a
              className="font-bold text-[#236cff] underline underline-offset-4"
              href="https://www.intuit.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all stories
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {newsCards.map((card, index) => (
            <Reveal key={card.title} delay={(index % 3) * 0.04}>
              <article className="group flex min-h-[360px] flex-col overflow-hidden rounded-[32px] border border-[#d4d7dc] bg-[#f6f7f9] transition hover:-translate-y-1 hover:shadow-xl">
                {card.image ? (
                  <div className="aspect-square overflow-hidden bg-[#dce9ff]">
                    <img
                      src={card.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-[#101820] p-8 text-center text-5xl font-black tracking-[-0.06em] text-white">
                    Intuit
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-black text-[#6b6c72]">{card.category}</p>
                  <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.035em] text-[#101820]">{card.title}</h3>
                  {index === 2 ? <p className="mt-3 font-semibold text-[#393a3d]">QuickBooks redefines financial management</p> : null}
                  <span className="mt-auto pt-6 text-sm font-black text-[#236cff]">Read more</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
