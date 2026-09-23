import type { Metadata } from "next";
import Resume from "@/components/cv";

export const metadata: Metadata = {
  title: "Toms Johnson — CV / Resume",
  description: "Full Stack Developer with experience in React, Next.js, TypeScript, Python, FastAPI, and SQL.",
};

export default function CVPage() {
  return <Resume />;
}
