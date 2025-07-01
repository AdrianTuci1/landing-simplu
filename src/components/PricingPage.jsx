import { PricingSection } from './blocks/pricing-section'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRightIcon, CheckIcon, StarIcon } from "@radix-ui/react-icons"

const tiers = [
    {
        name: 'Starter',
        description: 'Perfect for small teams and startups',
        price: {
            monthly: 29,
            yearly: 290
        },
        features: [
            {
                name: '10,000 tokens per month',
                description: 'Enough for small projects and testing',
                included: true
            },
            {
                name: 'Basic analytics',
                description: 'Track your usage and performance',
                included: true
            },
            {
                name: 'Email support',
                description: 'Get help when you need it',
                included: true
            },
            {
                name: 'Advanced features',
                description: 'Priority support and custom integrations',
                included: false
            }
        ],
        highlight: false,
        icon: <StarIcon className="w-6 h-6" />
    },
    {
        name: 'Professional',
        description: 'Ideal for growing businesses',
        price: {
            monthly: 99,
            yearly: 990
        },
        features: [
            {
                name: '100,000 tokens per month',
                description: 'Scale your operations with confidence',
                included: true
            },
            {
                name: 'Advanced analytics',
                description: 'Detailed insights and reporting',
                included: true
            },
            {
                name: 'Priority support',
                description: '24/7 dedicated support team',
                included: true
            },
            {
                name: 'Custom integrations',
                description: 'Connect with your existing tools',
                included: true
            }
        ],
        highlight: true,
        badge: 'Most Popular',
        icon: <StarIcon className="w-6 h-6" />
    }
]

const extraPackage = {
    name: 'Enterprise Token Package',
    description: 'Unlimited tokens for large organizations',
    price: {
        monthly: 299,
        yearly: 2990
    },
    features: [
        {
            name: 'Unlimited tokens',
            description: 'No limits on your AI usage',
            included: true
        },
        {
            name: 'Dedicated account manager',
            description: 'Personal support for your team',
            included: true
        },
        {
            name: 'Custom model training',
            description: 'Train models on your specific data',
            included: true
        },
        {
            name: 'SLA guarantee',
            description: '99.9% uptime with compensation',
            included: true
        },
        {
            name: 'On-premise deployment',
            description: 'Deploy in your own infrastructure',
            included: true
        }
    ]
}

const PricingPage = () => {
  return (
    <>
        <PricingSection tiers={tiers} />
        
        {/* Extra Package Section */}
        <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 py-16 px-4">
            <div className="w-full max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-purple-600 text-white border-none shadow-lg">
                        Enterprise Solution
                    </Badge>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        {extraPackage.name}
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        {extraPackage.description}
                    </p>
                </div>

                <div className="bg-white dark:bg-zinc-800/50 rounded-3xl border border-purple-200 dark:border-purple-800 shadow-xl p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Pricing */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                                <span className="text-5xl font-bold text-purple-600 dark:text-purple-400">
                                    ${extraPackage.price.monthly}
                                </span>
                                <span className="text-lg text-zinc-500 dark:text-zinc-400">
                                    /month
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                                Or ${extraPackage.price.yearly}/year (save 17%)
                            </p>
                            <Button className="w-full lg:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <span className="flex items-center gap-2">
                                    Contact Sales
                                    <ArrowRightIcon className="w-4 h-4" />
                                </span>
                            </Button>
                        </div>

                        {/* Features */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {extraPackage.features.map((feature) => (
                                    <div key={feature.name} className="flex gap-3">
                                        <div className="mt-1 p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                            <CheckIcon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                                {feature.name}
                                            </div>
                                            <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                                {feature.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PricingPage