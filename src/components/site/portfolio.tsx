import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioFilters, projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

/** Responsive srcset off a single 4K source so retina/4K screens get full detail. */
function srcSet(url: string) {
  const base = url.replace(/&w=\d+/, "");
  return [960, 1440, 1920, 2560, 3840].map((w) => `${base}&w=${w} ${w}w`).join(", ");
}

function ProjectCard({ p, large }: { p: Project; large?: boolean }) {
  return (
    <article
      className={cn(
        "group glass-card hover-lift sheen-hover relative h-full overflow-hidden",
        large && "lg:flex lg:flex-col",
      )}
    >
      <div className={cn("relative overflow-hidden", large ? "aspect-16/9" : "aspect-16/10")}>
        <img
          src={p.image}
          srcSet={srcSet(p.image)}
          sizes={large ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
          alt={`${p.name} — ${p.categories.join(", ")} project by six2eight`}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />

        {/* depth wash + grain-free vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(120%_90%_at_50%_120%,color-mix(in_oklab,var(--color-primary)_28%,transparent),transparent_65%)]" />

        {/* top meta row */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
          <span className="pill border border-border/60 bg-background/60 px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground backdrop-blur-md">
            {p.year}
          </span>
          <span className="pill flex size-9 items-center justify-center border border-border/60 bg-background/60 text-foreground backdrop-blur-md transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
          </span>
        </div>

        {/* metric + CTA */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
          <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="text-display text-2xl leading-none text-primary sm:text-3xl">{p.metric}</div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{p.metricLabel}</div>
          </div>
          <span className="pill translate-y-3 bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:px-5 sm:text-sm">
            See Full Project
          </span>
        </div>
      </div>

      <div className={cn("p-5 sm:p-6", large && "lg:p-8")}>
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
        <h3 className={cn("text-display mt-4 text-2xl", large && "lg:text-4xl")}>{p.name}</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{p.copy}</p>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-transparent transition-colors duration-500 group-hover:ring-primary/30" />
    </article>
  );
}

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="work" className="relative border-t border-border py-20 sm:py-28">
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_40%_at_15%_0%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_70%),radial-gradient(50%_35%_at_85%_100%,color-mix(in_oklab,var(--color-primary)_8%,transparent),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow text-muted-foreground">Selected work</span>
            <h2 className="text-display mt-3 text-3xl sm:text-5xl">Our portfolio</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Products shipped for founders and teams who measure design in outcomes, not screenshots.
            </p>
          </div>
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

        <div className="mt-10 grid auto-rows-fr gap-5 sm:gap-6 lg:grid-cols-3">
          {visible.map((p, i) => {
            const large = Boolean(p.featured) && i % 4 === 0;
            return (
              <Reveal
                key={p.name}
                variant={i % 2 === 0 ? "left" : "right"}
                delay={(i % 3) * 90}
                className={cn("h-full", large && "lg:col-span-2")}
              >
                <ProjectCard p={p} large={large} />
              </Reveal>
            );
          })}
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
