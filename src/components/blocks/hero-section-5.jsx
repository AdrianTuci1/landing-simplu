import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

export function HeroSection() {
    return (
        <main className="overflow-x-hidden">
            <section>
                <div className="py-20 md:pb-32 lg:pb-20 lg:pt-32">
                    <div
                        className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div
                            className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1
                                className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Easy to use, powerful and flexible</h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg">Agentic business management tailored to your needs. Collaborate and get things done faster than ever or let the agent take full control.</p>

                            <div
                                className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                {/* <Button asChild size="lg" className="h-12 rounded-full pl-5 pr-3 text-base">
                                    <Link to="#link">
                                        <span className="text-nowrap">Start Building</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button> */}
                                <div className="flex w-full max-w-sm items-center space-x-2">
                                    <input
                                        type="email"
                                        placeholder="Notify me when it's available"
                                        className="flex h-12 flex-1 rounded-full border border-input bg-background px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    />
                                    <Button size="lg" className="h-12 w-12 rounded-full p-0">
                                        <ChevronRight className="h-5 w-5" />
                                    </Button>
                                </div>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                    <Link to="/select">
                                        <span className="text-nowrap">See demo</span>
                                    </Link>
                                </Button>
                            </div>
                            
                            {/* Industry chips */}
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                                <span className="text-sm text-muted-foreground">Perfect for:</span>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                                        Dental Clinics
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                                        Gyms
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                                        Hotels
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                        <video
                            className="size-full object-cover opacity-50 invert dark:opacity-50 dark:invert-0 dark:lg:opacity-75 scale-125"
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="/video.mov" type="video/quicktime" 
                        />
                    </div>
                </div>
            </section>
            <section className="bg-background pb-2">
                <div className="group relative m-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        {/* <div className="md:max-w-44 md:border-r md:pr-6">
                            <p className="text-end text-sm">Our integrations</p>
                        </div> */}
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            {/* <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/0b9cd3e1-9fad-4a5b-b3a0-c96b0a1f1d2b/elevenlabs-logo-black.png"
                                        alt="eleven labs logo"
                                        height="20"
                                        width="auto" />
                                </div>

                                <div className="flex">
                                    <img
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="https://asset.brandfetch.io/idT7wVo_zL/idcTlzh-Y9.png"
                                        alt="twillio logo"
                                        height="16"
                                        width="auto" />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/aws-brand-color.png"
                                        alt="aws logo"
                                        height="16"
                                        width="auto" />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/nike.svg"
                                        alt="Nike Logo"
                                        height="20"
                                        width="auto" />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                        alt="Lemon Squeezy Logo"
                                        height="20"
                                        width="auto" />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/laravel.svg"
                                        alt="Laravel Logo"
                                        height="16"
                                        width="auto" />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-7 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/lilly.svg"
                                        alt="Lilly Logo"
                                        height="28"
                                        width="auto" />
                                </div>

                                <div className="flex">
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/openai.svg"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </div>
                            </InfiniteSlider> */}

                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div
                                className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1} />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}