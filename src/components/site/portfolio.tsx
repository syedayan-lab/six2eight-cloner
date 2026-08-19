import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioFilters, projects } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="work" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-display text-3xl sm:text-5xl">Our portfolio</h2>
          <Magnetic>
            <a
              href="#contact"
              className="pill press sheen-hover inline-flex w-fit items-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              View All Work <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
        </Reveal>


        <Reveal className="mt-8 flex flex-wrap gap-2" delay={80}>
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "pill press border px-4 py-2 text-sm transition-all duration-300 cursor-pointer",
                active === f
                  ? "border-primary bg-primary text-primary-foreground scale-105 shadow-[0_10px_30px_-12px_var(--color-primary)]"
                  : "border-border text-muted-foreground hover:bg-surface-2 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal
              key={p.name}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={(i % 2) * 90}
              className="h-full"
            >
              <article className="group glass-card hover-lift sheen-hover h-full overflow-hidden">
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="pill translate-y-3 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-500 group-hover:translate-y-0">
                      See Full Project
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="pill border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-display mt-4 text-2xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>


        {visible.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
