import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
    const tiers = [
        {
            name: "Workspace",
            price: "$50",
            description: "Everything you need to manage your business.",
            features: [
                "Includes 1 workspace",
                "Unlimited customers",
                "Advanced analytics",
                "Priority support",
                "Custom workflows",
                "$25/month per additional seat"
            ],
            cta: "Start for free",
            variant: "default",
            popular: true,
        }
    ];

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Pricing plans for teams of all sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
                    Choose the plan that fits your needs. No hidden fees.
                </p>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:justify-center xl:gap-x-12">
                    <div className="flex justify-center w-full">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${tier.popular ? "bg-gray-50 ring-2 ring-primary" : "bg-white"
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.name}
                                        className="text-lg font-semibold leading-8 text-foreground"
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.popular ? (
                                        <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                                            Most popular
                                        </p>
                                    ) : null}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-foreground">
                                        {tier.price}
                                    </span>
                                    {tier.price !== "Custom" && (
                                        <span className="text-sm font-semibold leading-6 text-muted-foreground">
                                            /month
                                        </span>
                                    )}
                                </p>
                                <Button
                                    variant={tier.variant}
                                    className="mt-6 w-full"
                                    aria-describedby={tier.name}
                                >
                                    {tier.cta}
                                </Button>
                                <ul
                                    role="list"
                                    className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground"
                                >
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check
                                                className="h-6 w-5 flex-none text-primary"
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;