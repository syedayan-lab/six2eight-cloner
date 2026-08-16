import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">
              <span className="size-1.5 rounded-full bg-primary" />
              FAQ
            </p>
            <h2 className="text-display mt-6 text-3xl sm:text-5xl">
              Got Questions? Let&rsquo;s Clear Things Up.
            </h2>
            <p className="mt-5 text-muted-foreground">Clear answers to move forward confidently.</p>
            <a
              href="#contact"
              className="pill mt-7 inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              See FAQ <ArrowUpRight className="size-4" />
            </a>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
