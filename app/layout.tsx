import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ansarudeen Indiana",
  description: "Spreading the teachings of Cheikh Ahmada Tijani and Cheikh Ibrahim Niass",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-green-400 to-blue-500">
        <header className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white p-4 sticky top-0 z-50 shadow-lg">
          <Navigation />
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white py-12">
          {/* Footer content remains unchanged */}
        </footer>
      </body>
    </html>
  );
}
