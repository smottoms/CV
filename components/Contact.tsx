import { Mail, MapPin, Github, Instagram, Send } from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#05070c] pt-20 sm:pt-24 pb-12 px-6 border-t border-[#1c2230]/60"
    >
      {/* 3D Glowing Blue Celestial Sphere in bottom right */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-24 sm:-bottom-48 sm:-right-24 w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] rounded-full z-0 overflow-hidden"
        style={{
          background: "radial-gradient(circle at 25% 25%, #2563eb 0%, #1e3a8a 35%, #0b132b 65%, #05070c 85%)",
          boxShadow: "inset 14px 14px 50px rgba(96, 165, 250, 0.7), 0 0 120px rgba(37, 99, 235, 0.35)",
        }}
        aria-hidden
      />

      <div className="relative max-w-content mx-auto z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Contact Badges */}
        <div className="lg:col-span-8">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accentSoft mb-5">
            GET IN TOUCH
            <span className="h-[1px] w-10 bg-accentSoft/60" />
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white max-w-xl leading-tight">
            Let&rsquo;s Build Something Great
          </h2>
          <p className="mt-4 text-white/50 max-w-md text-sm sm:text-base font-normal">
            I&rsquo;m open to opportunities, collaborations, or just a friendly
            chat.
          </p>

          <div className="mt-9 flex flex-wrap gap-4 max-w-lg">
            <a
              href="mailto:tomsjohnson@example.com"
              className="flex items-center gap-3 rounded-full border border-[#1e2638] bg-[#0c1017] px-6 py-3 text-sm text-white/80 hover:border-accent/60 transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} className="text-white/60" /> tomsjohnson56@gmail.com
            </a>
            <div className="flex items-center gap-3 rounded-full border border-[#1e2638] bg-[#0c1017] px-6 py-3 text-sm text-white/80">
              <MapPin size={16} className="text-white/60" /> India
            </div>
          </div>
        </div>

        {/* Right Column: Social Icons Over/Beside Planet */}
       
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative max-w-content mx-auto mt-20 pt-8 border-t border-[#1c2230]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/40 z-10">
        <div className="flex items-center gap-1.5 font-medium text-white">
          <span className="font-bold text-base tracking-tight">TJ</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent translate-y-[1px]" />
          <span className="text-white/40 ml-4 font-normal">
            &copy; 2026 Toms Johnson. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3 text-white/60 font-medium">
          <span>Design. Build. Run.</span>
          <span className="h-[1.5px] w-8 bg-white/20 inline-block" />
        </div>
      </div>
    </footer>
  );
}
