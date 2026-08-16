import { ArrowUpRight } from "lucide-react";
import { clientLogos, services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow">
          <span className="size-1.5 rounded-full bg-primary" />
          Services
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2 className="text-display text-3xl sm:text-5xl">
            We help you design
            <br />
            and build <span className="text-primary">better digital products.</span> All in ONE place!
          </h2>
          <div>
            <p className="text-muted-foreground">
              You need a partner who gets your business and covers everything. From branding to UI/UX
              design and web development, you can rely on us for everything.
            </p>
            <a
              href="#work"
              className="pill mt-6 inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              See All Services <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group glass-card overflow-hidden transition-colors hover:border-primary/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 bg-gradient-to-t from-black/80 to-transparent p-3">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="pill border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] text-foreground backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-display text-xl">
                  {s.titleTop}
                  <span className="block text-muted-foreground">{s.titleBottom}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more <ArrowUpRight className="size-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientLogos() {
  const row1 = clientLogos.slice(0, 13);
  const row2 = clientLogos.slice(13);

  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow justify-center w-full text-center">Projects Completed For</p>
      </div>
      <div className="mt-10 space-y-6">
        {[row1, row2].map((row, idx) => (
          <div key={idx} className="marquee-mask overflow-hidden">
            <div
              className={idx % 2 ? "flex w-max gap-3 animate-marquee-rev" : "flex w-max gap-3 animate-marquee"}
              style={{ ["--marquee-duration" as string]: idx % 2 ? "55s" : "45s" }}
            >
              {[...row, ...row].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="pill shrink-0 border border-border bg-surface px-7 py-3 text-lg font-medium tracking-tight text-muted-foreground"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
