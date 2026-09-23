"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "contact"];
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#05070c]/80 backdrop-blur-md border-b border-[#1c2230]/60">
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 py-4 sm:py-5">
        <a href="#home" className="flex items-center text-xl font-bold tracking-tight text-white group">
          <div className="relative flex items-center">
            <span className="flex justify-center w-[46px] h-[46px] rounded-full ring-2 ring-accent/60 overflow-hidden bg-[#0c1220] transition-transform group-hover:scale-105">
              <Image
                src="/profile/profile.png"
                width={500}
                height={500}
                alt="profile"
                className="w-auto h-[56px] translate-y-[-5px] object-cover"
              />
            </span>
            {/* Verified Blue Tick Badge */}
            <span
              title="Verified"
              className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white ring-2 ring-[#05070c] shadow-sm shadow-accent/50"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm font-normal text-white/70">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.href.replace("#", ""))}
                  className={`py-1 transition-colors hover:text-white ${
                    isActive ? "text-white font-medium" : "text-white/60"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-[22px] h-[2px] bg-accent transition-all duration-300" />
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accentSoft transition-all shadow-md shadow-accent/20"
        >
          Let&rsquo;s Talk <ArrowRight size={15} />
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#1c2230] bg-[#05070c] px-6 py-5 shadow-2xl">
          <ul className="flex flex-col gap-4 text-white/80 text-sm">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.href.replace("#", ""));
                      setOpen(false);
                    }}
                    className={`block py-1 ${isActive ? "text-accent font-medium" : "text-white/70"}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white"
          >
            Let&rsquo;s Talk <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
