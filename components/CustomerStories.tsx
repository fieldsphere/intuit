import { customerStories } from "@/lib/stories";
import { Reveal } from "@/components/Reveal";

export function CustomerStories() {
  return (
    <section id="stories" className="bg-[#f6f7f9] py-16 lg:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#236cff]">Small Businesses</p>
              <h2 className="text-balance mt-4 max-w-3xl text-[40px] font-black leading-[1.02] tracking-[-0.045em] text-[#101820] sm:text-[56px]">
                Real customers building with Intuit
              </h2>
            </div>
            <a
              className="font-bold text-[#236cff] underline underline-offset-4"
              href="https://www.intuit.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore more stories
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {customerStories.map((story, index) => (
            <Reveal key={story.name} delay={index * 0.05}>
              <article className="group h-full overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-[#d4d7dc] transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[376/252] overflow-hidden bg-[#dce9ff]">
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#393a3d]">
                    {story.product}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-3xl font-black tracking-[-0.035em] text-[#101820]">{story.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-[#393a3d]">{story.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
