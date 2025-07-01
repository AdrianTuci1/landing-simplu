import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Globe } from 'lucide-react'

export function Features11() {
    return (
        (<section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card
                        className="group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <p className="font-medium">Proffesional presentation website</p>
                                <p className="text-muted-foreground mt-3 max-w-sm text-sm">It doesn't just look good, it converts.</p>
                            </div>
                        </CardHeader>

                        <div className="relative h-fit pl-6 md:pl-12">
                            <div
                                className="absolute -inset-6 [background:radial-gradient(85%_95%_at_45%_0%,transparent,hsl(var(--background))_100%)]"></div>

                            <div
                                className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                                <img
                                    src="/website.png"
                                    className="hidden dark:block"
                                    alt="payments illustration dark"
                                    width={1207}
                                    height={929} />
                                <img
                                    src="/website.png"
                                    className="shadow dark:hidden"
                                    alt="payments illustration light"
                                    width={1207}
                                    height={929} />
                            </div>
                        </div>
                    </Card>

                    <Card
                        className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
                        <p
                            className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">Advanced UX, Instantly locate what you need.</p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                <div
                                    className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <img
                                        src="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&w=3840&q=75"
                                        className="hidden dark:block"
                                        alt="payments illustration dark"
                                        width={1207}
                                        height={929} />
                                    <img
                                        src="https://tailark.com/_next/image?url=%2Forigin-cal.png&w=3840&q=75"
                                        className="shadow dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card
                        className="group p-6 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
                        <p
                            className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">Choose your own domain.</p>

                        <div className="flex justify-center">
                            <div
                                className="inset-shadow-sm dark:inset-shadow-white/5 bg-white dark:bg-zinc-900 flex items-center rounded-[7px] border px-4 py-2 shadow-lg ring dark:shadow-white/5 dark:ring-black max-w-sm w-full">
                                <div className="flex items-center space-x-2 w-full">
                                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">https://</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">your-business.com</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        className="group relative shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
                        <CardHeader className="p-6 md:p-12">
                            <p className="font-medium">Advanced integration</p>
                            <p className="text-muted-foreground mt-2 max-w-sm text-sm">AI can take full control of your business.</p>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div
                                    className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-15"
                                        src="https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg"
                                        alt="Linear logo"
                                        width="32"
                                        height="32" />
                                </div>
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div
                                    className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8"
                                        src="https://avatars.githubusercontent.com/u/109142?s=280&v=4"
                                        alt="Netlify logo"
                                        width="32"
                                        height="32" />
                                </div>
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div
                                    className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8"
                                        src="https://cdn.prod.website-files.com/65ba24129df733a18dfde106/65e070b8e382b5c1e1fa9b20_slack-transp.png"
                                        alt="github logo"
                                        width="32"
                                        height="32" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>)
    );
}