import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quishing Awareness | College Cybersecurity Project",
  description:
    "An educational cybersecurity website demonstrating the risks of QR-code phishing (Quishing) with an interactive simulation, risk breakdown, and practical safety checklist.",
  authors: [{ name: "Cybersecurity Awareness Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#064e3b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
