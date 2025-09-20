"use client";;
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const accordionVariants = cva("w-full max-w-xl", {
  variants: {
    variant: {
      default:
        "border border-border rounded-xl overflow-hidden shadow-md/2",
      ghost: "",
      outline:
        "border border-border rounded-xl shadow-md/2",
    },
    size: {
      sm: "text-sm max-w-lg",
      default: "max-w-2xl",
      lg: "text-lg max-w-4xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const accordionItemVariants = cva("border-b border-border last:border-b-0", {
  variants: {
    variant: {
      default: "",
      ghost:
        "border-b border-border last:border-b-0 mb-2 last:mb-0",
      outline: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-4 px-6 text-left font-medium transition-all hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "",
        ghost: "px-0",
        outline: "",
      },
      size: {
        sm: "py-3 px-4 text-sm",
        default: "py-4 px-6",
        lg: "py-5 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const accordionContentVariants = cva("px-6 pb-4 pt-0 text-muted-foreground", {
  variants: {
    variant: {
      default: "",
      ghost: "px-0",
      outline: "",
    },
    size: {
      sm: "px-4 pb-3 text-sm",
      default: "px-6 pb-4",
      lg: "px-6 pb-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Accordion = React.forwardRef(({ className, variant, size, children, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(accordionVariants({ variant, size }), className)}
    {...props}>
    {children}
  </AccordionPrimitive.Root>
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(({ className, variant, children, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}>
    {children}
  </AccordionPrimitive.Item>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef((
  { className, children, variant, size, icon, hideChevron = false, ...props },
  ref
) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ variant, size }), className)}
      {...props}>
      <div className="flex items-center gap-2">
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="text-left">
          {children}
        </span>
      </div>
      {!hideChevron && (
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, variant, size, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn(accordionContentVariants({ variant, size }), className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

// Mock data for FAQ section
const faqData = [
  {
    id: "item-1",
    question: "Ce este Simplu?",
    answer: "Simplu este un sistem modern de gestionare a programărilor care îți permite să îți gestionezi programările și clienții într-un singur loc."
  },
  {
    id: "item-3",
    question: "Ce face Simplu diferit de alte platforme de management?",
    answer: "Spre deosebire de platformele tradiționale de management, Simplu integrează AI direct în workflow-ul de management. Aceasta înseamnă că toate sarcinile tale zilnice pot fi gestionate automat, astfel încât să te poți concentra pe oferirea serviciului."
  },
  {
    id: "item-4",
    question: "Pot personaliza comportamentul agentului AI?",
    answer: "Da! Agentul AI învață din stilul tău de conținut, ghidurile de brand și preferințele tale. Poți seta parametri specifici, poți oferi exemple și îl poți antrena să se potrivească cu vocea și cerințele tale unice."
  },
  {
    id: "item-5",
    question: "Ce poate face agentul AI?",
    answer: "În acest moment, agentul AI poate gestiona toate sarcinile tale zilnice, cum ar fi: programarea programărilor primite prin WhatsApp, apeluri telefonice, emailuri. Poate trimite SMS clienților tăi pentru a le reaminti de programări, poate propune modificări de preț, poate comunica cu menajerele și multe altele."
  },
  {
    id: "item-6",
    question: "Este Simplu potrivit pentru întreprinderile mari?",
    answer: "Absolut! Simplu este conceput să se extindă de la afacerile mici la întreprinderile mari. Oferim securitate la nivel de întreprindere, management avansat al utilizatorilor și suport pentru multiple locații."
  },
  {
    id: "item-7",
    question: "Pot să îmi aduc propriul website?",
    answer: "În acest moment, nu suportăm să îți aduci propriul website, dar planificăm să facem asta în viitor."
  },
  {
    id: "item-8",
    question: "Funcționează bine cu alte platforme precum Booking.com, Airbnb, etc?",
    answer: "În acest moment, nu am putut să ne integrăm cu alte platforme, dar planificăm să facem asta în viitor."
  },
  {
    id: "item-9",
    question: "Luați și comisioane?",
    answer: "Gateway-ul de plată terț ia comisioane, noi luăm doar o taxă lunară pentru serviciu."
  },
];

export const Accordion1 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Întrebări Frecvente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tot ce trebuie să știi despre sistemul de management Simplu.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};