import React from "react";
import {
  TbBrandCpp,
  TbBrandPython,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandTailwind,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandGit,
  TbBrandFigma,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobeAfterEffect,
  TbBrandAdobePremiere,
} from "react-icons/tb";

// Matching line-art C vector to perfectly match the Tabler style
const IconC = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 8a5 5 0 0 0 -5 -4h-1a6 6 0 0 0 -6 6v4a6 6 0 0 0 6 6h1a5 5 0 0 0 5 -4" />
  </svg>
);

type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  brandColor: string;
};

// Row 1 (7 items): Core Programming & Frontend Development
const row1Skills: Skill[] = [
  { name: "C", icon: IconC, brandColor: "#659AD2" },
  { name: "C++", icon: TbBrandCpp, brandColor: "#00599C" },
  { name: "Python", icon: TbBrandPython, brandColor: "#3776AB" },
  { name: "JavaScript", icon: TbBrandJavascript, brandColor: "#F7DF1E" },
  { name: "TypeScript", icon: TbBrandTypescript, brandColor: "#3178C6" },
  { name: "React", icon: TbBrandReact, brandColor: "#61DAFB" },
  { name: "React Native", icon: TbBrandReactNative, brandColor: "#61DAFB" },
];

// Row 2 (6 items): Modern Web, Frameworks & Databases
const row2Skills: Skill[] = [
  { name: "Next.js", icon: TbBrandNextjs, brandColor: "#FFFFFF" },
  { name: "Node.js", icon: TbBrandNodejs, brandColor: "#5FA04E" },
  { name: "MongoDB", icon: TbBrandMongodb, brandColor: "#47A248" },
  { name: "Tailwind CSS", icon: TbBrandTailwind, brandColor: "#38BDF8" },
  { name: "HTML", icon: TbBrandHtml5, brandColor: "#E34F26" },
  { name: "CSS", icon: TbBrandCss3, brandColor: "#1572B6" },
];

// Row 3 (6 items): Version Control & Creative Suite
const row3Skills: Skill[] = [
  { name: "Git", icon: TbBrandGit, brandColor: "#F05032" },
  { name: "Figma", icon: TbBrandFigma, brandColor: "#F24E1E" },
  { name: "Photoshop", icon: TbBrandAdobePhotoshop, brandColor: "#31A8FF" },
  { name: "Illustrator", icon: TbBrandAdobeIllustrator, brandColor: "#FF9A00" },
  { name: "After Effects", icon: TbBrandAdobeAfterEffect, brandColor: "#9999FF" },
  { name: "Premiere Pro", icon: TbBrandAdobePremiere, brandColor: "#EA77FF" },
];

const skillRows = [
  { id: "row-1", skills: row1Skills },
  { id: "row-2", skills: row2Skills },
  { id: "row-3", skills: row3Skills },
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
            A combination of full-stack development, IT support, and design skills helps me build
            complete digital products.
          </p>
        </div>

        {/* Balanced 3-Row Centered Layout */}
        <div className="space-y-6 sm:space-y-7 max-w-4xl mx-auto">
          {skillRows.map((row) => (
            <div
              key={row.id}
              className="flex flex-wrap items-start justify-center gap-4 sm:gap-6"
            >
              {row.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2.5 group w-[72px] sm:w-[76px]"
                  >
                    <div
                      className="h-16 w-16 sm:h-[76px] sm:w-[76px] rounded-xl sm:rounded-2xl border border-[#1b2333] bg-[#0c1017] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-[var(--brand-color)]/50 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)]"
                      style={{ "--brand-color": skill.brandColor } as React.CSSProperties}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/55 transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--brand-color)] group-hover:drop-shadow-[0_0_8px_var(--brand-color)]" />
                    </div>
                    <p className="text-xs font-medium text-white/60 text-center tracking-tight group-hover:text-white/90 transition-colors h-8 flex items-start justify-center leading-snug">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

