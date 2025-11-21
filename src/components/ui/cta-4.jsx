import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const defaultItems = [
  "Instant access",
  "Support 24/7",
  "Premium design",
  "AI integration",
  "Adapted to your needs",
];

export const Cta4 = ({
  title = "Încearcă Simplu acum",
  description = "Începe să lucrezi cu noi, 30 de zile gratuit. Nu este necesar niciun card de credit.",
  buttonText = "Începe",
  buttonUrl = "https://shadcnblocks.com",
  items = defaultItems
}) => {
  return (
    (<section className="relative flex h-full items-stretch bg-gray-100">
      {/* Borduri orizontale solide - top și bottom */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-border z-30 hidden sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-border z-30 hidden sm:block"
        aria-hidden
      />
      {/* Borduri verticale solide */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[40px] w-px bg-border hidden sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-[40px] w-px bg-border hidden sm:block"
        aria-hidden
      />
      {/* Bordură orizontală de jos */}
      <div
        className="pointer-events-none absolute bottom-0 left-[40px] right-[40px] z-20 border-b border-border border-dotted hidden sm:block"
        aria-hidden
      />
      {/* Borduri verticale dashed */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[153px] z-20 w-0 border-l border-dashed border-border/80 z-30 hidden sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-[153px] w-0 border-r border-dashed border-border/80 z-30 hidden sm:block"
        aria-hidden
      />
      {/* Borduri orizontale dashed */}
      <div
        className="pointer-events-none absolute h-0 border-t border-b border-border/80 z-30 hidden sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[40px] right-[40px] bottom-[calc(5%-18px)] h-0 border-b border-dashed border-border/80 z-30 hidden sm:block"
        aria-hidden
      />
      {/* Conținut */}
      <div className="relative z-10 flex h-full w-full justify-center px-5 pb-16 sm:px-6 sm:pb-24">
        <div className="flex h-full w-full max-w-6xl flex-col gap-0 text-left">
          <div
            className="flex flex-col items-start justify-between gap-8 rounded-lg px-6 py-10 md:flex-row lg:px-20 lg:py-16">
            <div className="md:w-1/2">
              <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
              <Button className="mt-6" asChild>
                <a href={buttonUrl} target="_blank">
                  {buttonText} <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <div className="md:w-1/3">
              <ul className="flex flex-col space-y-2 text-sm font-medium">
                {items.map((item, idx) => (
                  <li className="flex items-center" key={idx}>
                    <Check className="mr-4 size-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
};
