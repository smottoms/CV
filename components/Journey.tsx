const roles = [
  {
    period: "2025 - 2026",
    title: "First Solution Pvt Ltd",
    role: "Full Stack Developer",
    active: true,
  },
  {
    period: "2024 - 2025",
    title: "Zilicon Network Solution Pvt Ltd",
    role: "IT Support & Graphic and Motion Graphic",
    active: false,
  },
  {
    period: "2023 - 2024",
    title: "Zilicon Network Solution",
    role: "Graphic Designer / Motion Graphic Designer",
    active: false,
  },
  {
    period: "2021 - 2023",
    title: "Freelancer",
    role: "Graphic Designer (Event Companies)",
    active: false,
  },
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-[#05070c] py-20 sm:py-24 px-6 border-t border-[#1c2230]/60">
      {/* Ambient background glow for right side */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[20%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[130px]"
        aria-hidden
      />

      <div className="relative max-w-content mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Timeline */}
        <div className="md:col-span-7">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accentSoft mb-5">
            EXPERIENCE
            <span className="h-[1px] w-10 bg-accentSoft/60" />
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-12 sm:mb-14">
            My Journey
          </h2>

          <div className="space-y-9 relative">
            {roles.map((role, idx) => (
              <div key={role.title} className="flex items-start gap-6 sm:gap-8 group">
                {/* Period on Left */}
                <div className="w-24 sm:w-28 pt-0.5 text-xs sm:text-sm font-medium text-white/50 shrink-0 text-left">
                  {role.period}
                </div>

                {/* Vertical Timeline Dot & Line */}
                <div className="relative flex flex-col items-center self-stretch">
                  <div
                    className={`shrink-0 z-10 ${
                      role.active
                        ? "h-4 w-4 rounded-full bg-accent ring-4 ring-accent/30 shadow-[0_0_12px_#2f6bff]"
                        : "h-3.5 w-3.5 rounded-full bg-[#1c2230] border-2 border-white/40"
                    }`}
                  />
                  {idx !== roles.length - 1 && (
                    <div className="w-[1.5px] bg-[#1c2230] flex-1 my-1" />
                  )}
                </div>

                {/* Company and Role on Right */}
                <div className="flex-1 pb-4">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/50 font-normal">
                    {role.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Quote */}
        <div className="md:col-span-5 flex flex-col justify-center md:pl-4">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accentSoft mb-5">
            KEEP LEARNING
            <span className="h-[1px] w-10 bg-accentSoft/60" />
          </p>
          <blockquote className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] text-white">
            &ldquo;A better version of me{" "}
            <span className="text-accent">every day.</span>&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
