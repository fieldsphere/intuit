import { successTogether } from "@/lib/stories";
import { Reveal } from "@/components/Reveal";

export function SuccessTogether() {
  return (
    <section className="bg-[#f6f7f9] py-20 lg:py-28">
      <div className="section-shell">
        <Reveal>
          <div>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <h2 className="text-balance text-[40px] font-black leading-[1.02] tracking-[-0.045em] text-[#101820] sm:text-[56px]">
                  Driving success together
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {successTogether.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[32px] border border-[#d4d7dc] bg-white p-7 text-[#101820] transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <h3 className="text-2xl font-black tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-4 leading-7 text-[#393a3d]">{item.body}</p>
                    <span className="mt-8 inline-flex text-sm font-black text-[#236cff]">Learn more</span>
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
