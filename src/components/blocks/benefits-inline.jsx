import { ShieldCheck, Maximize2, Puzzle } from 'lucide-react'

const items = [
    { title: 'scalable', Icon: Maximize2 },
    { title: 'expandable', Icon: Puzzle },
    { title: 'secure', Icon: ShieldCheck },
]

export function BenefitsInline() {
    return (
        <section className="py-16">
            <div className="mx-auto flex flex-row items-center justify-center gap-6">
                {items.map(({ title, Icon }) => (
                    <div key={title} className="flex items-center gap-0 py-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center">
                            <Icon className="h-5 w-5 text-foreground" />
                        </span>
                        <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                            {title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

