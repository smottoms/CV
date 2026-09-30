"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, Github, Link as LinkIcon, Download, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const coreStrengths = [
  "Technical Troubleshooting",
  "Problem Solving",
  "System Configuration",
  "End-User Support",
  "Full Stack Development",
  "Mobile Development",
  "API Development",
  "Database Integration",
  "Debugging",
  "Team Collaboration",
];

const experience = [
  {
    range: "2025 – 2026",
    company: "First Solution Pvt Ltd",
    role: "Full Stack Developer",
    bullets: [
      "Developed and maintained full-stack web applications using React, Next.js, TypeScript, Node.js, Python, and FastAPI.",
      "Developed responsive and component-based user interfaces using React and modern frontend development practices.",
      "Worked with React Native for mobile application development and API integration.",
      "Designed and integrated REST APIs for frontend and mobile applications.",
      "Implemented application functionality involving authentication, API communication, data handling, and database integration.",
      "Worked with MySQL, PostgreSQL, SQL, and MongoDB for application data management and database integration.",
      "Used Git and GitHub for source-code management, version control, and development workflows.",
      "Performed application debugging, testing, troubleshooting, and maintenance.",
      "Worked across frontend and backend components to identify and resolve application issues.",
    ],
  },
  {
    range: "2024 – 2025",
    company: "Zilicon Network Solution Pvt Ltd",
    role: "IT Support & Graphic / Motion Graphic Designer",
    bullets: [
      "Provided day-to-day IT support for desktop computers, laptops, software, peripherals, and user technical requirements.",
      "Configured and prepared desktop and laptop systems for users and workplace operations.",
      "Installed and configured operating systems, applications, and required software.",
      "Troubleshot hardware, software, system, and connectivity-related issues and implemented practical solutions.",
      "Assisted with desktop setup, system configuration, device setup, maintenance, and technical troubleshooting.",
      "Supported users with software installation, configuration, peripheral setup, and general technical issues.",
      "Diagnosed technical problems and assisted users in resolving issues affecting their day-to-day work.",
      "Created graphic designs and motion graphics for business, digital, promotional, and marketing requirements.",
    ],
  },
  {
    range: "2023 – 2024",
    company: "Zilicon Network Solution",
    role: "Graphic Designer / Motion Graphic Designer",
    bullets: [
      "Created digital graphics, promotional creatives, and visual content for business and marketing requirements.",
      "Designed motion graphics and digital visual assets for promotional and communication purposes.",
      "Developed creative materials based on project requirements and brand guidelines.",
      "Collaborated on digital content and visual assets for business requirements.",
    ],
  },
  {
    range: "2021 – 2023",
    company: "Freelance",
    role: "Graphic Designer",
    bullets: [
      "Created graphic design assets for clients and event-related projects.",
      "Designed promotional graphics, social-media creatives, and branded visual content.",
      "Worked with clients to understand requirements and deliver designs according to project needs.",
    ],
  },
];

const technicalSkills = [
  {
    label: "Development",
    value: "React • React Native • Next.js • Node.js • TypeScript • JavaScript • Python • FastAPI",
  },
  {
    label: "Backend & APIs",
    value: "REST APIs • API Integration • Authentication • Backend Development",
  },
  {
    label: "Databases",
    value: "SQL • MySQL • PostgreSQL • MongoDB • Database Design",
  },
  {
    label: "Programming",
    value: "Python • JavaScript • TypeScript • C • C++",
  },
  {
    label: "IT Support",
    value: "Desktop Support • Laptop Support • System Configuration • Hardware Troubleshooting • Software Troubleshooting • Software Installation • Operating System Setup • Peripheral Configuration • User Support • System Maintenance",
  },
  {
    label: "Tools",
    value: "Git • GitHub • VS Code",
  },
  {
    label: "Testing & Debugging",
    value: "PyTest • Unit Testing • Debugging • Troubleshooting",
  },
  {
    label: "Design",
    value: "Graphic Design • Motion Graphics • UI/UX Design",
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3.5 first:mt-0">
      <div className="flex items-center gap-2 mb-1.5">
        <h2 className="text-[11px] font-bold tracking-widest text-slate-900 uppercase">{title}</h2>
        <div className="h-0.5 w-6 bg-blue-600 rounded" />
      </div>
      {children}
    </div>
  );
}

export default function Resume() {
  const [downloading, setDownloading] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!cvRef.current || downloading) return;
    try {
      setDownloading(true);
      const element = cvRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgHeight = (canvasHeight * pageWidth) / canvasWidth;

      // Always guarantee exactly 1 single A4 page
      if (imgHeight <= pageHeight) {
        pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, imgHeight);
      } else {
        const scaleFactor = pageHeight / imgHeight;
        const scaledWidth = pageWidth * scaleFactor;
        const xOffset = (pageWidth - scaledWidth) / 2;
        pdf.addImage(imgData, "JPEG", xOffset, 0, scaledWidth, pageHeight);
      }

      pdf.save("Toms_Johnson_CV.pdf");
    } catch (err) {
      console.error("PDF generation error:", err);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__triggerCvDownload = generatePDF;
      const params = new URLSearchParams(window.location.search);
      if (params.get("download") === "true") {
        setTimeout(() => {
          generatePDF();
        }, 600);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-6 px-4 flex flex-col items-center">
      {/* Print-specific style overrides */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          #cv-content {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Top Action Bar */}
      <div className="no-print w-full max-w-[850px] mb-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={generatePDF}
            disabled={downloading}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-75 px-5 py-2 text-xs font-semibold text-white transition-all shadow-sm"
          >
            {downloading ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                Generating 1-Page PDF...
              </>
            ) : (
              <>
                <Download size={15} />
                Download PDF (1 Page)
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main CV Layout Container targeted for PDF Export */}
      <div
        id="cv-content"
        ref={cvRef}
        className="w-full max-w-[850px] bg-white shadow-xl flex flex-col md:flex-row overflow-hidden rounded-xl border border-slate-200"
      >
        {/* Left Sidebar */}
        <aside className="bg-slate-900 text-slate-200 w-full md:w-[245px] shrink-0 p-5 flex flex-col justify-between">
          <div>
            <div className="mx-auto h-24 w-24 rounded-full ring-2 ring-blue-500 overflow-hidden bg-slate-700 flex items-center justify-center shadow-md">
              <img
                src="/profile/profile.png"
                alt="Toms Johnson"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-5">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-white">CONTACT</h2>
              <div className="mt-1 mb-2 h-0.5 w-6 bg-blue-500" />
              <ul className="space-y-1.5 text-[11px] leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <Phone size={13} className="text-blue-400 shrink-0" />
                  <span>7400251388</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={13} className="text-blue-400 shrink-0" />
                  <span className="break-all">tomsjohnson56@gmail.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Github size={13} className="text-blue-400 shrink-0" />
                  <span>github.com/smottoms</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <LinkIcon size={13} className="text-blue-400 shrink-0" />
                  <span>tomsjohnson.vercel.app</span>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-white">CORE STRENGTHS</h2>
              <div className="mt-1 mb-2 h-0.5 w-6 bg-blue-500" />
              <ul className="space-y-1 text-[10.5px] leading-snug text-slate-300">
                {coreStrengths.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-800 text-center italic text-[11px] text-slate-400">
            &ldquo;Build &bull; Learn &bull; Grow&rdquo;
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 p-5 md:p-6">
          <div className="flex items-start justify-between gap-4 mb-2.5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                TOMS <span className="text-blue-600">JOHNSON</span>
              </h1>
              <p className="mt-0.5 text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-600 uppercase">
                FULL STACK DEVELOPER | IT SUPPORT | DESKTOP SUPPORT
              </p>
            </div>
            <div className="text-right text-[9.5px] font-bold tracking-widest text-slate-400 leading-tight border-l-2 border-blue-600 pl-2.5 hidden sm:block shrink-0">
              IDEAS
              <br />
              INTO
              <br />
              IMPACT
            </div>
          </div>

          <Section title="PROFESSIONAL SUMMARY">
            <p className="text-[10.5px] leading-relaxed text-slate-700">
              Full Stack Developer and IT Support professional with 5 years of experience spanning web
              and mobile application development, desktop support, system configuration,
              troubleshooting, and digital design. Experienced in building applications using React,
              React Native, Next.js, TypeScript, Node.js, Python, and FastAPI, with database
              experience in MySQL, PostgreSQL, SQL, and MongoDB. Hands-on IT support experience
              including desktop and laptop configuration, software installation, system setup,
              hardware and software troubleshooting, peripheral setup, and end-user technical support.
            </p>
          </Section>

          <Section title="PROFESSIONAL EXPERIENCE">
            <div className="relative border-l-2 border-slate-200 pl-3.5 space-y-2.5">
              {experience.map((job) => (
                <div key={job.company + job.range} className="relative">
                  <span className="absolute -left-[19px] top-1.5 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <h3 className="text-[11.5px] font-bold text-slate-900">{job.company}</h3>
                    <span className="text-[10px] font-semibold text-slate-400">{job.range}</span>
                  </div>
                  <p className="text-[10.5px] font-semibold text-blue-600">{job.role}</p>
                  <ul className="mt-1 space-y-0.5 text-[10px] leading-tight text-slate-700 list-disc list-outside ml-3">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="TECHNICAL SKILLS">
            <div className="divide-y divide-slate-100 border-t border-slate-200">
              {technicalSkills.map((row) => (
                <div key={row.label} className="grid grid-cols-[105px_1fr] gap-2 py-0.5 text-[10px] leading-snug">
                  <span className="font-bold text-slate-900">{row.label}</span>
                  <span className="text-slate-700">{row.value}</span>
                </div>
              ))}
            </div>
          </Section>

          <div className="mt-4 flex items-center gap-2 justify-end text-[10px] font-bold tracking-widest text-slate-400">
            <span className="h-0.5 w-5 bg-blue-600" />
            BUILD &bull; LEARN &bull; GROW
          </div>
        </main>
      </div>
    </div>
  );
}
