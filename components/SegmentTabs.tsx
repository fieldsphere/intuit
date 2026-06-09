import { segments } from "@/lib/stories";
import { Reveal } from "@/components/Reveal";

export function SegmentTabs() {
  return (
    <section id="solutions" className="bg-white py-20 lg:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-[40px] font-black leading-[1.02] tracking-[-0.045em] text-[#101820] sm:text-[58px]">
              How Intuit drives success for
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {segments.map((segment, index) => (
            <Reveal key={segment.label} delay={index * 0.05}>
              <a
                href="#stories"
                className={`inline-flex rounded-full border px-6 py-3 text-lg font-black transition ${
                  index === 0
                    ? "border-[#101820] bg-[#101820] text-white"
                    : "border-[#d4d7dc] bg-white text-[#393a3d] hover:border-[#101820]"
                }`}
              >
                {segment.label}
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {segments.map((segment, index) => (
            <Reveal key={segment.heading} delay={index * 0.05}>
              <article className="h-full rounded-[32px] border border-[#d4d7dc] bg-[#f6f7f9] p-7">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#236cff]">{segment.label}</p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#101820]">{segment.heading}</h3>
                <p className="mt-4 text-lg leading-8 text-[#393a3d]">{segment.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
