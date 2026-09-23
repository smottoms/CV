"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#05070c]/80 backdrop-blur-md border-b border-[#1c2230]/60">
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center text-xl font-bold tracking-tight text-white group">

          <span className="flex justify-center w-[50px] h-[50px] rounded-full bg-accent overflow-hidden">

            <Image src='/profile/profile.png' width={500} height={500} alt="profile" className="w-auto h-[60px] translate-y-[-5px]">
            </Image>
            
            </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent ml-1 translate-y-[2px]" />
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm font-normal text-white/70">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`py-1 transition-colors hover:text-white ${
                  link.active ? "text-white font-medium" : "text-white/60"
                }`}
              >
                {link.label}
              </a>
              {link.active && (
                <span className="absolute left-0 right-0 -bottom-[22px] h-[2px] bg-accent" />
              )}
            </li>
          ))}
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
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1 ${link.active ? "text-accent font-medium" : "text-white/70"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
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
