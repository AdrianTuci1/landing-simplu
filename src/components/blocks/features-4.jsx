import { Cpu, Fingerprint, Globe, Layout, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export function Features4() {
    return (
        (<section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div
                    className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">The foundation for assisted business management</h2>
                    <p>Simplu is evolving to be more than just the models. It supports complete integration with api and external platforms.</p>
                </div>

                <div
                    className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Globe className="size-4" />
                            <h3 className="text-sm font-medium">Make your own</h3>
                        </div>
                        <p className="text-sm">You can use with your own domain.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Layout className="size-4" />
                            <h3 className="text-sm font-medium">Great presentation</h3>
                        </div>
                        <p className="text-sm">You receive a great website that converts.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-sm">It supports an helping developers businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Customization</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Control</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Built for AI</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                </div>
            </div>
        </section>)
    );
}