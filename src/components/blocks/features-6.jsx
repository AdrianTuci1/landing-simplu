import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { RobotNotification } from '../ui/robot-notification'

export function Features() {
    return (
        (<section className="py-40 md:py-20 lg:py-14 lg:pt-[25%]">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div
                    className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Fluxuri de lucru integrate cu agent AI în afacerea ta</h2>
                    <p className="max-w-sm sm:ml-auto">Împuternicește-ți echipa cu fluxuri care se adaptează la nevoile tale, fie că preferi sincronizarea în timp real sau interfața agentică.</p>
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
                            src="/dashboard.png"
                            className="dark:hidden rounded-3xl"
                            alt="payments illustration light"
                            width={2797}
                            height={1137} />
                        
                        {/* Robot Notification Overlay */}
                        <RobotNotification />
                    </div>
                </div>
                <div
                    className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Rapid</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Finalizează lucrurile mai rapid cu sincronizarea în timp real.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                        <h3 className="text-sm font-medium">Puternic</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Rulează în cloud, nu trebuie să instalezi nimic.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Securizat</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Datele tale sunt criptate, nici măcar noi nu le putem accesa.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">AI</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Agentul este capabil să preia controlul complet al afacerii tale.</p>
                    </div>
                </div>
            </div>
        </section>)
    );
}
