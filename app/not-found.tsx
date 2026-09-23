import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
      <p className="text-xl text-white/70 mb-8">Page Not Found</p>
      <Link
        href="/"
        className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accentSoft transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

