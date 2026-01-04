import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIE - Personalized Investment Engine",
  description: "A tool to learn about passion and value investing."
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        <div className="min-h-screen bg-cyan-900 text-slate-300">
          {children}
        </div>
      </body>
    </html>
  );
}
