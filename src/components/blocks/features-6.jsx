import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        (<section className="py-24 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div
                    className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Agent embedded workflows in your business</h2>
                    <p className="max-w-sm sm:ml-auto">Empower your team with workflows that adapt to your needs, whether you prefer real-time synchronization or Agentic interface.</p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-[88/36] relative">
                        <div
                            className="bg-gradient-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                        <img
                            src="https://tailark.com/_next/image?url=%2Fmail-back.png&w=3840&q=75"
                            className="hidden dark:block"
                            alt="payments illustration dark"
                            width={2797}
                            height={1137} />
                        <img
                            src="/manage.png
    "
                            className="dark:hidden rounded-3xl"
                            alt="payments illustration light"
                            width={2797}
                            height={1137} />
                    </div>
                </div>
                <div
                    className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Get things done faster with real-time synchronization.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Runs in the cloud, no need to install anything.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Your data is encrypted, even not us can access it.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Agent is capable of taking full control of your business.</p>
                    </div>
                </div>
            </div>
        </section>)
    );
}
