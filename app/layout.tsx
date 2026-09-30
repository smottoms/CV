import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toms Johnson — Full Stack Developer | IT Support | Desktop Support",
  description:
    "Full Stack Developer and IT Support professional with 5 years of experience spanning web & mobile application development, desktop support, system configuration, troubleshooting, and digital design.",
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
