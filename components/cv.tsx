"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, Github, Link as LinkIcon, Download, Printer, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const skills = [
  "Full Stack Development",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "FastAPI",
  "SQL",
  "C",
  "C++",
  "Graphic Design",
  "Motion Graphics",
  "UI/UX Design",
  "IT Support",
  "Problem Solving",
  "Git & GitHub",
  "Communication",
];

const experience = [
  {
    range: "2025 – 2026",
    company: "First Solution Pvt Ltd",
    role: "Full Stack Developer",
    bullets: [
      "Develop and maintain full-stack web applications using FastAPI, React, Next.js, TypeScript, and SQL-based databases.",
      "Build REST APIs, API integrations, authentication flows, database models, and responsive frontend interfaces.",
      "Apply Git, testing, debugging, and modern development workflows to deliver reliable and maintainable features.",
      "Work with AI-assisted development tools and local LLM workflows to support development, experimentation, and productivity.",
    ],
  },
  {
    range: "2024 – 2025",
    company: "Zilicon Network Solution Pvt Ltd",
    role: "IT Support & Graphic / Motion Graphic Designer",
    bullets: [
      "Provided IT support while creating graphic and motion-design assets for digital and business requirements.",
      "Troubleshot technical issues, supported users, and prepared visual content for projects and campaigns.",
    ],
  },
  {
    range: "2023 – 2024",
    company: "Zilicon Network Solution",
    role: "Graphic Designer / Motion Graphic Designer",
    bullets: [
      "Designed digital graphics, promotional creatives, and motion-graphic content for business and marketing projects.",
    ],
  },
  {
    range: "2021 – 2023",
    company: "Freelancer",
    role: "Graphic Designer",
    bullets: [
      "Created graphic design assets for clients, including promotional visuals, social-media creatives, and branded content.",
    ],
  },
];

const technicalSkills = [
  { label: "Backend", value: "Python, FastAPI, REST API Development, API Integration" },
  { label: "Frontend", value: "React, Next.js, TypeScript, JavaScript, Component-Based UI" },
  { label: "Database", value: "SQL, Database Design" },
  { label: "Testing", value: "PyTest, Unit Testing, Test Automation" },
  { label: "AI / GenAI", value: "LLM Integration, Local LLMs, Ollama, Qwen, Mistral, Prompt Engineering, AI-Assisted Development" },
  { label: "Tools", value: "Git, GitHub, Responsive UI Development" },
  { label: "Programming", value: "C, C++, Python, JavaScript" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 first:mt-0">
      <h2 className="text-sm font-bold tracking-widest text-slate-900">{title}</h2>
      <div className="mt-1 mb-4 h-0.5 w-8 bg-blue-600" />
      {children}
    </div>
  );
}

export default function Resume() {
  const [downloading, setDownloading] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    console.log("[CV] generatePDF invoked! cvRef:", !!cvRef.current, "downloading:", downloading);
    if (!cvRef.current || downloading) return;
    try {
      setDownloading(true);
      console.log('[CV PDF] Starting canvas rendering...');
      const element = cvRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      console.log('[CV PDF] Canvas rendered successfully!', canvas.width, 'x', canvas.height);

      const imgData = canvas.toDataURL("image/jpeg", 0.95);
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

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Toms_Johnson_CV.pdf");
      console.log('[CV PDF] PDF save completed!');
    } catch (err) {
      console.error("PDF generation error:", err);
      // Fallback to native print if canvas fails
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__triggerCvDownload = generatePDF;
      console.log("[CV] Resume mounted, __triggerCvDownload ready!");
      const params = new URLSearchParams(window.location.search);
      if (params.get("download") === "true") {
        setTimeout(() => {
          generatePDF();
        }, 800);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 flex flex-col items-center">
      {/* Print-specific style overrides */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          #cv-content {
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
        }
      `}</style>

      {/* Top Action Bar (hidden when printing or rendering PDF) */}
      <div className="no-print w-full max-w-5xl mb-5 flex flex-wrap items-center justify-between gap-4">
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
                Generating PDF...
              </>
            ) : (
              <>
                <Download size={15} />
                Download PDF
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main CV Layout Container targeted for PDF Export */}
      <div
        id="cv-content"
        ref={cvRef}
        className="w-full max-w-5xl bg-white shadow-xl flex flex-col md:flex-row overflow-hidden rounded-xl border border-slate-200"
      >
        {/* Left Sidebar */}
        <aside className="bg-slate-900 text-slate-200 w-full md:w-[280px] shrink-0 p-8 flex flex-col justify-between">
          <div>
            <div className="mx-auto h-36 w-36 rounded-full ring-4 ring-blue-500 overflow-hidden bg-slate-700 flex items-center justify-center text-4xl font-bold text-slate-300">
              <img
                src="/profile/profile.png"
                alt="Toms Johnson"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-9">
              <h2 className="text-xs font-bold tracking-[0.2em] text-white">CONTACT</h2>
              <div className="mt-1.5 mb-4 h-0.5 w-8 bg-blue-500" />
              <ul className="space-y-3 text-xs leading-relaxed">
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-blue-400 shrink-0" />
                  <span>7400251288</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={15} className="text-blue-400 shrink-0" />
                  <span className="break-all">tomsjohnson56@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Github size={15} className="text-blue-400 shrink-0" />
                  <span>github.com/smottoms</span>
                </li>
                <li className="flex items-center gap-3">
                  <LinkIcon size={15} className="text-blue-400 shrink-0" />
                  <span>tomsjohnson.vercel.app</span>
                </li>
              </ul>
            </div>

            <div className="mt-9">
              <h2 className="text-xs font-bold tracking-[0.2em] text-white">SKILLS</h2>
              <div className="mt-1.5 mb-4 h-0.5 w-8 bg-blue-500" />
              <ul className="space-y-2 text-xs">
                {skills.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800 text-center italic text-xs text-slate-400">
            &ldquo;Build &bull; Learn &bull; Grow&rdquo;
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 p-8 md:p-10">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                TOMS <span className="text-blue-600">JOHNSON</span>
              </h1>
              <p className="mt-1 text-xs font-semibold tracking-[0.25em] text-slate-500">
                FULL STACK DEVELOPER
              </p>
            </div>
            <div className="text-right text-[11px] font-bold tracking-widest text-slate-500 leading-relaxed border-l-2 border-blue-600 pl-3">
              IDEAS
              <br />
              INTO
              <br />
              IMPACT
            </div>
          </div>

          <Section title="SUMMARY">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              Full Stack Developer with 5 years of professional experience across software
              development, IT support, graphic design, and motion graphics. Experienced in
              building web applications using React, Next.js, TypeScript, Python, FastAPI, and
              SQL. Practical experience with REST APIs, API integrations, authentication,
              databases, responsive UI development, Git, testing, and AI-assisted development
              workflows.
            </p>
          </Section>

          <Section title="EXPERIENCE">
            <div className="relative border-l-2 border-slate-200 pl-6 space-y-7">
              {experience.map((job) => (
                <div key={job.company + job.range} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white" />
                  <p className="text-xs font-bold text-slate-500">{job.range}</p>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{job.company}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600">{job.role}</p>
                  <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-700 list-disc list-outside ml-4">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="TECHNICAL SKILLS">
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {technicalSkills.map((row) => (
                <div key={row.label} className="grid grid-cols-[110px_1fr] gap-4 py-2 text-xs sm:text-sm">
                  <span className="font-bold text-slate-900">{row.label}</span>
                  <span className="text-slate-700">{row.value}</span>
                </div>
              ))}
            </div>
          </Section>

          <div className="mt-8 flex items-center gap-3 justify-end text-[11px] font-bold tracking-widest text-slate-500">
            <span className="h-0.5 w-6 bg-blue-600" />
            BUILD &bull; LEARN &bull; GROW
          </div>
        </main>
      </div>
    </div>
  );
}
