import { PricingSection } from './blocks/pricing-section'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowRightIcon, CheckIcon, StarIcon } from "@radix-ui/react-icons"

const tiers = [
    {
        name: 'Starter',
        description: 'Perfect pentru echipe mici și startup-uri',
        price: {
            monthly: 29,
            yearly: 290
        },
        features: [
            {
                name: '10.000 de tokeni pe lună',
                description: 'Suficient pentru proiecte mici și testare',
                included: true
            },
            {
                name: 'Analiză de bază',
                description: 'Urmărește utilizarea și performanța ta',
                included: true
            },
            {
                name: 'Suport prin email',
                description: 'Obține ajutor când ai nevoie',
                included: true
            },
            {
                name: 'Funcții avansate',
                description: 'Suport prioritar și integrări personalizate',
                included: false
            }
        ],
        highlight: false,
        icon: <StarIcon className="w-6 h-6" />
    },
    {
        name: 'Professional',
        description: 'Ideal pentru afaceri în creștere',
        price: {
            monthly: 99,
            yearly: 990
        },
        features: [
            {
                name: '100.000 de tokeni pe lună',
                description: 'Scalează operațiunile cu încredere',
                included: true
            },
            {
                name: 'Analiză avansată',
                description: 'Insights detaliate și raportare',
                included: true
            },
            {
                name: 'Suport prioritar',
                description: 'Echipă de suport dedicată 24/7',
                included: true
            },
            {
                name: 'Integrări personalizate',
                description: 'Conectează-te cu instrumentele tale existente',
                included: true
            }
        ],
        highlight: true,
        badge: 'Cel mai popular',
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