import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY, processSteps } from "@/data/site";
import { cn } from "@/lib/utils";

export function Process() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow">
          <span className="size-1.5 rounded-full bg-primary" />
          Our Process
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="text-display text-3xl sm:text-5xl">How We Get It Done.</h2>
          <p className="text-muted-foreground">
            Every step, done right. From discovery to launch — structured, smooth, and built to deliver.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {processSteps.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={cn(
                "pill border px-5 py-2.5 text-sm transition-colors cursor-pointer",
                i === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-surface-2 hover:text-foreground",
              )}
            >
              <span className="mr-2 opacity-60">{String(i + 1).padStart(2, "0")}</span>
              {s.name}
            </button>
          ))}
        </div>

        <div className="glass-card mt-8 grid gap-0 overflow-hidden lg:grid-cols-[1.2fr_1fr]">
          <div className="aspect-16/10 overflow-hidden lg:aspect-auto">
            <img src={step.image} alt={step.alt} className="size-full object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="text-display text-6xl text-primary/25">
              {String(active + 1).padStart(2, "0")}
            </span>
            <h3 className="text-display mt-3 text-2xl sm:text-3xl">{step.name}</h3>
            <p className="mt-4 text-muted-foreground">{step.copy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConsultCta() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="glass-card relative overflow-hidden px-6 py-14 text-center sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-full h-72 w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
            style={{ background: "var(--color-primary)" }}
          />
          <p className="eyebrow relative justify-center">
            <span className="size-1.5 rounded-full bg-primary" />
            Let&rsquo;s talk
          </p>
          <h2 className="text-display relative mx-auto mt-6 max-w-3xl text-3xl sm:text-5xl">
            Consult <span className="text-primary">strategy</span> to build stronger product
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-muted-foreground">
            30 minutes to understand your product, uncover the real problems, and figure out what
            actually needs to change.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="pill relative mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book a Free Consultation <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
