import { useEffect, useState } from 'react'

const menuItems = [
    { id: 'clinici', label: 'Pentru clinici', video: '/1106.mp4' },
    { id: 'hoteluri', label: 'Pentru hoteluri', video: '/1107.mp4' },
    { id: 'fitness', label: 'Pentru sali de fitness', video: '/video-fitness.mp4' },
    { id: 'mesaje', label: 'Mesaje automate', video: '/video-mesaje.mp4' }
]

export function Features() {
    const [activeTab, setActiveTab] = useState('clinici')
    const activeVideo = menuItems.find(item => item.id === activeTab)?.video || menuItems[0].video

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentIndex = menuItems.findIndex(item => item.id === activeTab)
            const nextIndex = (currentIndex + 1) % menuItems.length
            setActiveTab(menuItems[nextIndex].id)
        }, 3000)

        return () => clearTimeout(timeout)
    }, [activeTab])

    return (
        <section className="relative">
            <div className="mx-auto max-w-5xl space-y-8 px-6">
                <div className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <div className="grid min-w-max grid-cols-4 divide-x divide-border">
                            {menuItems.map((item) => (
                                <div key={item.id} className="flex flex-col">
                                    <button
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full px-6 py-5 text-center text-base font-medium transition-colors duration-200 ${
                                            activeTab === item.id
                                                ? 'bg-muted/60 text-foreground'
                                                : 'bg-background text-muted-foreground hover:bg-muted/40'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                    <div className={`h-[2px] ${activeTab === item.id ? 'bg-border' : 'bg-transparent'}`}>
                                        {activeTab === item.id && (
                                            <div
                                                key={activeTab}
                                                className="progress-indicator h-full w-full bg-primary/80"
                                            ></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-t border-border pb-2" />
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 bottom-[152px] z-0" aria-hidden="true">
                <div className="mx-auto flex h-full max-w-5xl justify-between px-6">
                    <span className="block h-full border-l border-dashed border-border/60"></span>
                    <span className="block h-full border-l border-dashed border-border/60"></span>
                </div>
            </div>

            <div className="relative z-10 mt-[48px]">
                <div className="pointer-events-none absolute left-0 right-0 top-[33px] border-t border-dashed border-border/80" aria-hidden="true"></div>
                <div className="pointer-events-auto relative mx-auto w-full max-w-6xl px-6">
                    <div className="pointer-events-auto relative z-10">
                        <div className="pointer-events-none absolute inset-0 -left-2 -right-2 -top-2 -bottom-2 rounded-[18px] bg-gray-200/70" aria-hidden="true"></div>
                        <div className="pointer-events-none absolute inset-0 -left-2 -right-2 -top-2 -bottom-2 rounded-[18px] bg-gradient-to-t from-white via-white/80 to-transparent" aria-hidden="true"></div>
                        <div className="aspect-[90/50] relative overflow-hidden rounded-[12px]">
                            <video
                                key={activeTab}
                                src={activeVideo}
                                className="h-full w-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                Browserul tău nu suportă tag-ul video.
                            </video>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" aria-hidden="true"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
