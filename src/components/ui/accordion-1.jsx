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
    question: "What is Simplu?",
    answer: "Simplu is a modern appointment management system that allows you to manage your appointments and clients in one place."
  },
  {
    id: "item-3",
    question: "What makes Simplu different from other managemen platforms?",
    answer: "Unlike traditional management platforms, Simplu integrates AI directly into the management workflow. This means that all your daily tasks can be handled automatically so you can focus on delivering the service."
  },
  {
    id: "item-4",
    question: "Can I customize the AI agent's behavior?",
    answer: "Yes! The AI agent learns from your content style, brand guidelines, and preferences. You can set specific parameters, provide examples, and train it to match your unique voice and requirements."
  },
  {
    id: "item-5",
    question: "What can the AI agent do?",
    answer: "At the moment, the AI agent can handle all your daily tasks, such as: scheduling appointments received from whatsapp, phone calls, emails. It can send SMS to your clients to remind them of their appointments, can propose price changes, communicate with housekeepers and more."
  },
  {
    id: "item-6",
    question: "Is Simplu suitable for large enterprises?",
    answer: "Absolutely! Simplu is designed to scale from small businesses to large enterprises. We offer enterprise-grade security, advanced user management and muliple locations support."
  },
  {
    id: "item-7",
    question: "Can i bring my own website?",
    answer: "At this moment, we don't support bringing your own website, but we plan to do that in the future."
  },
  {
    id: "item-8",
    question: "It works well with other plaforms such as Booking.com, Airbnb, etc?",
    answer: "At this moment, we couldn't integrate with other platforms, but we plan to do that in the future."
  },
  {
    id: "item-9",
    question: "Do you take also commissions?",
    answer: "The third party payment gateway takes commissions, we only take a monthly fee for the service."
  },
];

export const Accordion1 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Simplu management system.
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