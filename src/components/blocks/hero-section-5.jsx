import React from 'react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
    return (
        <main className="overflow-x-hidden mt-8">
            <section className="py-24">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
                    <h1 className="text-balance text-6xl font-semibold tracking-tight sm:text-6xl">
                        Customer <br />management simplified.
                    </h1>
                    <p className="text-balance text-xl text-foreground/80">
                        Simplu is the go to CMS built for humans.
                    </p>
                    <div className="flex flex-row flex-wrap justify-center gap-3">
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