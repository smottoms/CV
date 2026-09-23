"use client";

import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#05070c] pt-36 sm:pt-40 pb-16 px-6">
      <div className="max-w-content mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading and CTAs */}
        <div className="lg:col-span-6 z-10">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accentSoft mb-6">
            FULL STACK DEVELOPER
            <span className="h-[1px] w-10 bg-accentSoft/60" />
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.04] tracking-tight text-white">
            Ideas
            <br />
            into <span className="text-accent">Impact.</span>
          </h1>

          <p className="mt-6 max-w-md text-white/60 text-base sm:text-lg leading-relaxed font-normal">
            I design, develop and create digital experiences that are simple,
            useful and look good.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accentSoft px-7 py-3 text-sm font-semibold text-white transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              About me <ArrowRight size={16} />
            </a>
            <a
              href="/cv?download=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
            >
              Download CV <Download size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Top Right Tag + Laptop Mockup */}
        <div className="lg:col-span-6 relative flex flex-col items-end">
          <div className="text-right text-[11px] font-semibold tracking-[0.2em] text-white/50 leading-relaxed mb-4 hidden sm:block">
            CLEAN CODE
            <br />
            CREATIVE DESIGN
            <br />
            <span className="inline-flex items-center gap-2">
              BETTER PRODUCTS
              <span className="h-[1.5px] w-7 bg-accent inline-block" />
            </span>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
            <img
              src="/assets/hero-laptop.jpg"
              alt="Design. Build. Run. Laptop Mockup"
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Subtle bottom-edge dark vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#05070c]/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator with Vertical Line */}
      <div className="max-w-content mx-auto mt-16 sm:mt-20 flex flex-col items-start gap-2 text-[11px] font-medium tracking-[0.25em] text-white/40">
        <div className="flex items-center gap-2">
          <span className="text-white/60 font-semibold">2</span>
          <span>SCROLL</span>
        </div>
        <div className="h-10 w-[1.5px] bg-white/20 ml-1.5" />
      </div>
    </section>
  );
}
