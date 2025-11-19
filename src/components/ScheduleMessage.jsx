const ScheduleMessage = () => (
  <section className="relative flex min-h-[80vh] items-center justify-center text-center">
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
      className="pointer-events-none absolute inset-y-0 left-[40px] right-[40px] z-0 bg-[radial-gradient(circle,_rgba(148,_163,_184,_0.4)_1px,_transparent_1px)] bg-[length:16px_16px]"
      aria-hidden
    />
    <div className="relative z-10 w-full max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
      <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
        We lose on average <br /> 40 hours every month
        <br className="hidden sm:block" />trying to get <br /> the schedule right.
      </h2>
    </div>
  </section>
);

export default ScheduleMessage;

