import { Badge } from "./ui/badge";
import { Scissors, Stethoscope, Building, Dumbbell, Leaf, Calendar, CheckCircle, CreditCard } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });

  return (
    <section className="relative flex h-full items-stretch">
      <div
        className="pointer-events-none absolute inset-y-0 left-[40px] w-px bg-border"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-[40px] w-px bg-border"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[40px] right-[40px] z-20 border-b border-border border-dotted"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-[153px] top-[10%] z-20 w-0 border-l border-dashed border-border/80 z-30 "
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-[153px] top-[10%] w-0 border-r border-dashed border-border/80 z-30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[40px] right-[40px] top-[calc(10%+18px)] left-0 right-0 h-0 border-t border-dashed border-border/80 z-30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[40px] right-[40px] bottom-[calc(5%-18px)] left-0 right-0 h-0 border-b border-dashed border-border/80 z-30"
        aria-hidden
      />
      {/* Pattern hash-urat la 45 grade - stânga */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[40px] z-20 right-[calc(50%+36rem+0rem)] top-[calc(10%+20px)] bottom-[calc(5%-18px)]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, hsl(var(--border)), hsl(var(--border)) 1px, transparent 1px, transparent 10px)',
        }}
        aria-hidden
      />
      {/* Pattern hash-urat la 45 grade - dreapta */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[calc(50%+36rem+0rem)] top-[calc(10%+20px)] right-[40px] bottom-[calc(5%-18px)] z-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, hsl(var(--border)), hsl(var(--border)) 1px, transparent 1px, transparent 10px)',
        }}
        aria-hidden
      />
      <div className="relative z-10 flex h-full w-full justify-center px-5 py-16 sm:px-6 sm:py-24">
        <div className="flex h-full w-full max-w-6xl flex-col gap-0 text-left">
          <header className="space-y-4 pb-8">
            <p className="text-4xl font-medium leading-relaxed text-foreground sm:text-4xl">
              Execute your retention strategy with precision.
              <span className="ml-2 text-muted-foreground">
              Intuitive workflows for sales and service, integrate all your customer data, and build clear schedules, process payments and sales — all in one platform.
              </span>
            </p>
          </header>
          <div className="bg-background/80 h-full">
            <div className="grid h-full w-full grid-cols-1 divide-y divide-border border border-border md:grid-cols-[1fr_1.5fr_1fr] md:divide-y-0 md:divide-x">
              <div className="flex h-full flex-col justify-start space-y-4 p-4">
                <h3 className="text-3xl font-semibold text-foreground">
                  Advanced timeline
                </h3>
                <p className="text-base text-muted-foreground">
                  Boost your productivity with our advanced timeline features.
                </p>
              </div>
              <div ref={timelineRef} className="relative flex h-full items-center justify-center p-4 overflow-hidden">
                <img
                  src="/timeline.png"
                  alt="Platform dashboard preview"
                  className="h-full w-full object-contain"
                />
                {/* Collaborative cursors animation */}
                <motion.img
                  src="/cursor1.png"
                  alt=""
                  className="absolute top-[180px] left-[180px] pointer-events-none z-10"
                  style={{
                    width: '120px',
                  }}
                  initial={{ opacity: 0, x: '10%', y: '20%' }}
                  animate={isInView ? {
                    opacity: [0, 1, 1, 1, 1],
                    x: ['10%', '20%', '35%', '40%', '50%'],
                    y: ['20%', '25%', '30%', '35%', '40%'],
                  } : { opacity: 0 }}
                  transition={{
                    duration: 8,
                    repeat: 0,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src="/cursor2.png"
                  alt=""
                  className="absolute pointer-events-none right-[100px] bottom-[140px] z-10"
                  style={{
                    width: '120px',
                  }}
                  initial={{ opacity: 0, x: '80%', y: '70%' }}
                  animate={isInView ? {
                    opacity: [0, 1, 1, 1, 1],
                    x: ['80%', '70%', '55%', '50%', '40%'],
                    y: ['70%', '65%', '60%', '55%', '50%'],
                  } : { opacity: 0 }}
                  transition={{
                    duration: 8,
                    repeat: 0,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div className="relative flex h-full flex-col overflow-hidden">
                <span className="pointer-events-none absolute left-0 right-0 top-[55%] h-px bg-border" />
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <Badge 
                      variant="outline" 
                      className="w-40 px-4 py-2 text-sm justify-start items-center gap-2 bg-white border-border text-foreground opacity-60"
                    >
                      <div className="p-0.5 rounded bg-pink-100">
                        <Scissors className="w-3 h-3 text-black" />
                      </div>
                      Beauty Salon
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="w-48 px-4 py-2 text-sm justify-start items-center gap-2 bg-white border-border text-foreground opacity-75"
                    >
                      <div className="p-0.5 rounded bg-blue-100">
                        <Stethoscope className="w-3 h-3 text-black" />
                      </div>
                      Dental Clinics
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="w-56 px-4 py-2 text-sm justify-start items-center gap-2 bg-white border-border text-foreground opacity-100"
                    >
                      <div className="p-0.5 rounded bg-amber-100">
                        <Building className="w-3 h-3 text-black" />
                      </div>
                      Hotel Management
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="w-48 px-4 py-2 text-sm justify-start items-center gap-2 bg-white border-border text-foreground opacity-75"
                    >
                      <div className="p-0.5 rounded bg-green-100">
                        <Dumbbell className="w-3 h-3 text-black" />
                      </div>
                      Fitness Places
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="w-44 px-4 py-2 text-sm justify-start items-center gap-2 bg-white border-border text-foreground opacity-60"
                    >
                      <div className="p-0.5 rounded bg-purple-100">
                        <Leaf className="w-3 h-3 text-black" />
                      </div>
                      Wellness & Spa
                    </Badge>
                  </div>
                </div>
                <div className="flex-1">
                <img
                    src="/logos/schedule.png"
                    alt="Mobile scheduling"
                    className="h-20 w-20 object-cover absolute bottom-[120px] right-[calc(50%-35px)]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background/80 h-full">
            <div className="grid h-full w-full grid-cols-1 divide-y divide-border border border-border md:grid-cols-[1fr_1.5fr_1fr] md:divide-y-0 md:divide-x">
              <div className="flex h-full flex-col justify-start space-y-4 p-4">
                <h3 className="text-3xl font-semibold text-foreground">
                  Connect to external services
                </h3>
                <p className="text-base text-muted-foreground">
                  You can send and receive data from external services. Automate emails, SMS, and more.
                </p>
              </div>
              <div className="flex h-full items-center justify-center p-4">
                <img
                  src="/nodes.png"
                  alt="Platform dashboard preview"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="relative flex h-full flex-col overflow-hidden">
                <span className="pointer-events-none absolute left-0 right-0 top-[55%] h-px bg-border" />
                <div className="flex flex-1 items-stretch">
                  <div className="grid w-full grid-cols-2 gap-2 p-4">
                    <div className="flex items-center justify-center">
                      <div className="rounded-lg bg-white border border-gray-300 p-1">
                        <img
                          src="/logos/mobile.png"
                          alt="Logo 1"
                          className="max-h-12 w-auto"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="rounded-lg bg-white border border-gray-300 p-1">
                        <img
                          src="/logos/logo2.svg"
                          alt="Logo 2"
                          className="max-h-12 w-auto"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="rounded-lg bg-white border border-gray-300 p-1">
                        <img
                          src="/logos/logo3.webp"
                          alt="Logo 3"
                          className="max-h-12 w-auto"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="rounded-lg bg-white border border-gray-300 p-1">
                        <img
                          src="/logos/logo4.png"
                          alt="Logo 4"
                          className="max-h-12 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src="/logos/puzzle.png"
                    alt="Mobile scheduling"
                    className="h-20 w-20 object-cover absolute bottom-[100px] right-[calc(50%-35px)]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background/80 h-full">
            <div className="grid h-full w-full grid-cols-1 divide-y divide-border border border-border md:grid-cols-[1fr_1.5fr_1fr] md:divide-y-0 md:divide-x">
              <div className="flex h-full flex-col justify-start space-y-4 p-4">
                <h3 className="text-3xl font-semibold text-foreground">
                  Proper onboarding
                </h3>
                <p className="text-base text-muted-foreground">
                  Easy to use interfaces are proven to bring more customers.
                </p>
              </div>
              <div className="flex h-full items-center justify-center">
                <img
                  src="/onboarding.png"
                  alt="Platform dashboard preview"
                  className="h-full w-full object-cover min-h-[650px]"
                />
              </div>
              <div className="relative flex h-full flex-col overflow-hidden">
                <span className="pointer-events-none absolute left-0 right-0 top-[55%] h-px bg-border" />
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <Badge 
                      variant="outline" 
                      className="w-48 px-4 py-2 text-sm justify-start items-center gap-2 bg-white border-border text-foreground opacity-60"
                    >
                      <div className="p-0.5 rounded bg-blue-100">
                        <Calendar className="w-3 h-3 text-black" />
                      </div>
                      See availability
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="w-48 px-4 py-2 text-sm justify-start items-center gap-2 bg-white border-border text-foreground opacity-75"
                    >
                      <div className="p-0.5 rounded bg-green-100">
                        <CheckCircle className="w-3 h-3 text-black" />
                      </div>
                      Select service
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="w-48 px-4 py-2 text-sm justify-start items-center gap-2 bg-white border-border text-foreground opacity-100"
                    >
                      <div className="p-0.5 rounded bg-purple-100">
                        <CreditCard className="w-3 h-3 text-black" />
                      </div>
                      Payment
                    </Badge>
                  </div>
                </div>
                <div className="flex-1">
                <img
                    src="/logos/target.png"
                    alt="Mobile scheduling"
                    className="h-20 w-20 object-cover absolute bottom-[100px] right-[calc(50%-35px)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;