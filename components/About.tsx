const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "Design + Code", label: "Focus" },
  { value: "Always", label: "Learning" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f3f2ee] text-ink py-20 sm:py-24 px-6">
      <div className="max-w-content mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text and Stats Cards */}
        <div className="md:col-span-6 lg:col-span-6">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#1c2230] mb-5">
            ABOUT ME
            <span className="h-[1.5px] w-8 bg-[#1c2230]/70" />
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-ink leading-tight">
            Hi, I&rsquo;m
            <br />
            <span className="text-accent">Toms Johnson.</span>
          </h2>

          <p className="mt-6 text-[#4b5563] text-sm sm:text-base leading-relaxed max-w-lg font-normal">
            I&rsquo;m a Full Stack Developer with a background in graphic and
            motion design. I enjoy turning ideas into real products — from
            crisp visuals to functional web applications. I like learning new
            technologies, solving problems, and building things that are
            useful and look good.
          </p>

          {/* 4 Stat Boxes Matching Screenshot */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 max-w-lg">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/90 border border-black/[0.08] rounded-xl p-3 sm:p-3.5 shadow-sm text-left flex flex-col justify-center"
              >
                <p className="text-base sm:text-lg font-bold text-ink leading-snug">
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs text-[#6b7280] font-medium leading-tight mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Desk Photo */}
        <div className="md:col-span-6 lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 aspect-[4/3] group">
            <img
              src="/assets/about-desk.jpg"
              alt="Workspace desk with Better Ideas Everyday notebook"
              className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
