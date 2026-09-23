import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toms Johnson — Full Stack Developer",
  description:
    "I design, develop and create digital experiences that are simple, useful and look good.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
