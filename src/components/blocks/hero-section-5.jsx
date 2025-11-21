
import { Button } from '@/components/ui/button'

export function HeroSection() {
    return (
        <main className="overflow-x-hidden mt-8">
            <section className="py-12 sm:py-24">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 text-center">
                    <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                        Customer management simplified.
                    </h1>
                    <p className="text-balance text-lg sm:text-xl text-foreground/80">
                        Simplu is the go to CMS built for humans.
                    </p>
                    <div className="flex flex-row flex-wrap justify-center gap-3 w-full sm:w-auto">
                        <Button size="lg" className="px-8 text-base">
                            Start for free
                        </Button>
                        <Button size="lg" variant="secondary" className="px-8 text-base">
                            Talk to sales
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}