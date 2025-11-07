import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

function PricingSection({
  tiers,
  className
}) {
  const [isYearly, setIsYearly] = useState(false)

  const buttonStyles = {
    default: cn(
      "h-12 bg-white dark:bg-zinc-900",
      "hover:bg-zinc-50 dark:hover:bg-zinc-800",
      "text-zinc-900 dark:text-zinc-100",
      "border border-zinc-200 dark:border-zinc-800",
      "hover:border-zinc-300 dark:hover:border-zinc-700",
      "shadow-sm hover:shadow-md",
      "text-sm font-medium"
    ),
    highlight: cn(
      "h-12 bg-zinc-900 dark:bg-zinc-100",
      "hover:bg-zinc-800 dark:hover:bg-zinc-300",
      "text-white dark:text-zinc-900",
      "shadow-[0_1px_15px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_1px_20px_rgba(0,0,0,0.15)]",
      "font-semibold text-base"
    ),
  }

  const badgeStyles = cn(
    "px-4 py-1.5 text-sm font-medium",
    "bg-zinc-900 dark:bg-zinc-100",
    "text-white dark:text-zinc-900",
    "border-none shadow-lg"
  )

  return (
    (<section
      className={cn(
        "relative bg-background text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        className
      )}>
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Prețuri simple și transparente
          </h2>
          <div
            className="inline-flex items-center p-1.5 bg-white dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">
            {["Lunar", "Anual"].map((period) => (
              <button
                key={period}
                onClick={() => setIsYearly(period === "Anual")}
                className={cn(
                  "px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300 relative",
                  (period === "Anual") === isYearly
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                )}>
                {period}
                {period === "Anual" && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold bg-green-500 text-white rounded-full">
                    -20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-3xl transition-all duration-300",
                "flex flex-col",
                tier.isEnterprise
                  ? "bg-gradient-to-b from-zinc-900 to-zinc-800 text-white"
                  : tier.highlight
                  ? "bg-gradient-to-b from-zinc-100/80 to-transparent dark:from-zinc-400/[0.15]"
                  : "bg-white dark:bg-zinc-800/50",
                "border",
                tier.isEnterprise
                  ? "border-zinc-700 shadow-2xl"
                  : tier.highlight
                  ? "border-zinc-400/50 dark:border-zinc-400/20 shadow-xl"
                  : "border-zinc-200 dark:border-zinc-700 shadow-md",
                "hover:translate-y-0 hover:shadow-lg"
              )}>
              {tier.badge && tier.highlight && (
                <div className="absolute -top-4 left-6">
                  <Badge className={badgeStyles}>{tier.badge}</Badge>
                </div>
              )}
              {tier.requiresBasic && (
                <div className="absolute -top-4 right-6">
                  <Badge className="px-3 py-1.5 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-none">
                    + Pro
                  </Badge>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={cn("p-3 rounded-xl", tier.isEnterprise
                      ? "bg-zinc-700 text-white"
                      : tier.highlight
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400")}>
                    {tier.icon}
                  </div>
                  <h3 className={cn("text-xl font-semibold", tier.isEnterprise
                    ? "text-white"
                    : "text-zinc-900 dark:text-zinc-100")}>
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className={cn("text-4xl font-bold", tier.isEnterprise
                      ? "text-white"
                      : "text-zinc-900 dark:text-zinc-100")}>
                      {tier.price.monthly === 'Custom' ? 'Custom' : `${tier.requiresBasic ? "+" : ""}€${isYearly ? tier.price.yearly : tier.price.monthly}`}
                    </span>
                    {tier.price.monthly !== 'Custom' && (
                      <span className={cn("text-sm", tier.isEnterprise
                        ? "text-zinc-300"
                        : "text-zinc-500 dark:text-zinc-400")}>
                        /{isYearly ? "an" : "lună"}
                      </span>
                    )}
                    {isYearly && tier.price.yearly !== 'Custom' && tier.price.yearly < tier.price.monthly && (
                      <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                        -20%
                      </span>
                    )}
                  </div>
                  {isYearly && tier.price.yearly !== 'Custom' && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-zinc-400 line-through">
                        {tier.requiresBasic ? "+" : ""}€{tier.price.monthly * 12}
                      </span>
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                        Economisești €{(tier.price.monthly * 12) - tier.price.yearly}
                      </span>
                    </div>
                  )}
                  {tier.requiresBasic && (
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      Preț adițional la pachetul Pro
                    </p>
                  )}
                  <p className={cn("mt-2 text-sm", tier.isEnterprise
                    ? "text-zinc-300"
                    : "text-zinc-600 dark:text-zinc-400")}>
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-4">
                      <div
                        className={cn("mt-1 p-0.5 rounded-full transition-colors duration-200", feature.included
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-zinc-400 dark:text-zinc-600")}>
                        <CheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={cn("text-sm font-medium", tier.isEnterprise
                          ? "text-white"
                          : "text-zinc-900 dark:text-zinc-100")}>
                          {feature.name}
                        </div>
                        <div className={cn("text-sm", tier.isEnterprise
                          ? "text-zinc-300"
                          : "text-zinc-500 dark:text-zinc-400")}>
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Button
                  className={cn("w-full relative transition-all duration-300", tier.isEnterprise
                    ? "h-12 bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 hover:border-zinc-400 shadow-lg hover:shadow-xl font-semibold text-base"
                    : tier.highlight
                    ? buttonStyles.highlight
                    : buttonStyles.default)}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Începe
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

export { PricingSection }