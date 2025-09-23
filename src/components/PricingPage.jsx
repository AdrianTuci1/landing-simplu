import { PricingSection } from './blocks/pricing-section'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRightIcon, CheckIcon, StarIcon } from "@radix-ui/react-icons"

const tiers = [
    {
        name: 'Pro',
        description: 'Pachetul profesional cu toate funcționalitățile esențiale',
        price: {
            monthly: 550,
            yearly: 5280
        },
        features: [
            {
                name: 'Sistem management',
                description: 'Gestionare completă a afacerii tale',
                included: true
            },
            {
                name: 'Compatibilitate vânzări',
                description: 'Integrare cu sistemele de vânzări existente',
                included: true
            },
            {
                name: 'Fluxuri automate nelimitate',
                description: 'Automatizare completă a proceselor',
                included: true
            },
            {
                name: 'Facturare',
                description: 'Sistem complet de facturare și contabilitate',
                included: true
            },
            {
                name: '1 locație',
                description: 'Gestionare pentru o singură locație',
                included: true
            },
            {
                name: 'Carduri acces',
                description: 'Sistem de acces cu carduri',
                included: true
            },
            {
                name: '1000 SMS lunar',
                description: 'Notificări și comunicare prin SMS',
                included: true
            }
        ],
        highlight: true,
        badge: 'Recomandat',
        icon: <StarIcon className="w-6 h-6" />
    },
    {
        name: 'Enterprise',
        description: 'Pentru afaceri cu multiple locații și volume mari de lucru',
        price: {
            monthly: 'Custom',
            yearly: 'Custom'
        },
        features: [
            {
                name: 'Toate funcționalitățile Pro',
                description: 'Acces la toate caracteristicile pachetului Pro',
                included: true
            },
            {
                name: 'Locații nelimitate',
                description: 'Gestionare pentru locații nelimitate',
                included: true
            },
            {
                name: '5000 SMS lunar',
                description: 'Notificări și comunicare prin SMS extinsă',
                included: true
            },
            {
                name: 'Suport prioritar 24/7',
                description: 'Asistență tehnică dedicată non-stop',
                included: true
            },
            {
                name: 'Integrări personalizate',
                description: 'Conectare cu sistemele existente',
                included: true
            },
            {
                name: 'Raportare avansată',
                description: 'Analize și rapoarte detaliate',
                included: true
            },
            {
                name: 'Minute apel AI în funcție de cerere',
                description: 'Apeluri AI nelimitate cu preț personalizat',
                included: true
            }
        ],
        highlight: false,
        isEnterprise: true,
        icon: <StarIcon className="w-6 h-6" />
    },
    {
        name: 'Apeluri AI',
        description: '3500 de minute de apeluri AI pe lună',
        price: {
            monthly: 1500,
            yearly: 14400
        },
        features: [
            {
                name: '3500 minute AI',
                description: 'Apeluri automate cu inteligență artificială',
                included: true
            },
            {
                name: 'Toate funcționalitățile Pro',
                description: 'Acces la toate caracteristicile pachetului Pro',
                included: true
            },
            {
                name: 'Suport tehnic dedicat',
                description: 'Asistență specializată pentru apeluri AI',
                included: true
            }
        ],
        highlight: false,
        requiresBasic: true,
        icon: <StarIcon className="w-6 h-6" />
    }
]


const PricingPage = () => {
  return (
    <>
        <PricingSection tiers={tiers} />
    </>
  )
}

export default PricingPage