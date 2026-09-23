import React from "react";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const devSkills: Skill[] = [
  {
    name: "C",
    icon: (
      <div className="h-9 w-9 rounded-lg bg-[#00599C]/20 border border-[#00599C]/40 flex items-center justify-center font-bold text-white text-lg tracking-tight shadow-sm">
        C
      </div>
    ),
  },
  {
    name: "C++",
    icon: (
      <div className="h-9 w-9 rounded-lg bg-[#00599C]/20 border border-[#00599C]/40 flex items-center justify-center font-bold text-white text-sm tracking-tight shadow-sm">
        C++
      </div>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.91 2c-5.07 0-4.75 2.19-4.75 2.19l.01 2.27h4.82v.69H5.2S2 6.8 2 11.93c0 5.14 2.8 4.95 2.8 4.95h1.67v-2.33s-.09-2.8 2.75-2.8h4.72v-.73s.38-4.02-2.03-4.02zm-2.6 1.48a.9.9 0 110 1.8.9.9 0 010-1.8z"
          fill="#3776AB"
        />
        <path
          d="M12.09 22c5.07 0 4.75-2.19 4.75-2.19l-.01-2.27H12v-.69h6.78S22 17.2 22 12.07c0-5.14-2.8-4.95-2.8-4.95h-1.67v2.33s.09 2.8-2.75 2.8H10.05v.73s-.38 4.02 2.04 4.02zm2.6-1.48a.9.9 0 110-1.8.9.9 0 010-1.8z"
          fill="#FFD438"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <div className="w-8 h-8 rounded bg-[#F7DF1E] flex items-end justify-end p-1 text-black font-extrabold text-xs shadow-sm">
        JS
      </div>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-8 h-8 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <div className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-sm">
        <svg className="w-5 h-5 text-white" viewBox="0 0 180 180" fill="none">
          <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask0)">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path
              d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
              fill="url(#paint0_linear)"
            />
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-8 h-8 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
];

const designAndTools: Skill[] = [
  {
    name: "HTML",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3z" fill="#E34F26" />
        <path d="M12 3.8v16.3l5.6-1.9L19.1 3.8H12z" fill="#EF652A" />
        <path
          d="M7.7 7.2h8.6l-.3 3.1H12v.1H8l.3 3.4H12v.1h-4l.4 4.5 3.6 1v.1l3.6-1 .4-4.8h-2.3l-.2 2.3-1.5.4-1.5-.4-.1-1.6h5.3l.5-6.8H7.7z"
          fill="#FFF"
        />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3z" fill="#1572B6" />
        <path d="M12 3.8v16.3l5.6-1.9L19.1 3.8H12z" fill="#33A9DC" />
        <path
          d="M12 7.2h4.3l-.4 3.1H12v.1h3.9l-.4 4.5-3.5 1v.1l-3.5-1-.2-2.7h2.2l.1 1.2 1.4.4 1.4-.4.2-1.9H8.2l-.2-3.1H12V7.2z"
          fill="#FFF"
        />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className="w-8 h-8 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.62 10.95L13.06 2.39a1.53 1.53 0 00-2.17 0L8.71 4.56l2.74 2.74a1.81 1.81 0 012.3 2.3l2.64 2.64a1.81 1.81 0 11-1.09 1.05l-2.46-2.46v5.42a1.81 1.81 0 11-1.53 0V10.7a1.8 1.8 0 01-.98-.98L7.6 12.44a1.81 1.81 0 11-1.08-1.08l2.74-2.74L2.39 15.5a1.53 1.53 0 000 2.17l8.55 8.55a1.53 1.53 0 002.17 0l8.51-8.51a1.53 1.53 0 000-2.18z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "Photoshop",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#001E36] border border-[#31A8FF] flex items-center justify-center font-bold text-[#31A8FF] text-xs shadow-sm">
        Ps
      </div>
    ),
  },
  {
    name: "Illustrator",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#330000] border border-[#FF9A00] flex items-center justify-center font-bold text-[#FF9A00] text-xs shadow-sm">
        Ai
      </div>
    ),
  },
  {
    name: "After Effects",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#00005B] border border-[#9999FF] flex items-center justify-center font-bold text-[#9999FF] text-xs shadow-sm">
        Ae
      </div>
    ),
  },
  {
    name: "Premiere Pro",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#00005B] border border-[#EA77FF] flex items-center justify-center font-bold text-[#EA77FF] text-xs shadow-sm">
        Pr
      </div>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#05070c] py-20 sm:py-24 px-6 border-t border-[#1c2230]/60">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accentSoft mb-5">
              MY SKILLS
              <span className="h-[1px] w-10 bg-accentSoft/60" />
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Tools I Work With
            </h2>
          </div>
          <p className="max-w-xs text-white/50 text-sm leading-relaxed font-normal">
            A combination of development and design skills helps me build
            complete digital products.
          </p>
        </div>

        {/* Two Rows Matching Screenshot (Row 1: 7 dev skills without Node.js; Row 2: 8 web & design skills) */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Row 1: Development Tools */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {devSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2.5 group w-[72px] sm:w-[76px]">
                <div className="h-16 w-16 sm:h-[76px] sm:w-[76px] rounded-xl sm:rounded-2xl border border-[#1b2333] bg-[#0c1017] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-accent/50 group-hover:-translate-y-1 group-hover:shadow-accent/10">
                  {skill.icon}
                </div>
                <p className="text-xs font-medium text-white/60 text-center tracking-tight group-hover:text-white/90 transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: Design & Web Tools */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {designAndTools.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2.5 group w-[72px] sm:w-[76px]">
                <div className="h-16 w-16 sm:h-[76px] sm:w-[76px] rounded-xl sm:rounded-2xl border border-[#1b2333] bg-[#0c1017] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-accent/50 group-hover:-translate-y-1 group-hover:shadow-accent/10">
                  {skill.icon}
                </div>
                <p className="text-xs font-medium text-white/60 text-center tracking-tight group-hover:text-white/90 transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
