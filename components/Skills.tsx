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
    name: "TypeScript",
    icon: (
      <div className="w-8 h-8 rounded bg-[#3178C6] flex items-end justify-end p-1 text-white font-extrabold text-xs shadow-sm">
        TS
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
    name: "Node.js",
    icon: (
      <svg className="w-8 h-8 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.347.198-.666.282-.992.282zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.129.199.247.199h1.141c.071 0 .138-.031.186-.081.048-.054.074-.123.067-.196-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742-.02-.124-.126-.215-.253-.215h-1.137c-.141 0-.254.112-.254.253 0 1.482.806 3.248 4.655 3.248 3.097 0 4.695-1.097 4.695-3.014z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 128 128">
        <path fillRule="evenodd" clipRule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z" />
      </svg>
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
            A combination of full-stack development, IT support, and design skills helps me build
            complete digital products.
          </p>
        </div>

        {/* Two Rows (Row 1: Development Tools; Row 2: Design & Web Tools) */}
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
