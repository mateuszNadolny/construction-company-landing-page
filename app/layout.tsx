import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navbar";

import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
const dmSans = DM_Sans({
  // variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nordhaven | Modern Modular Homes",
  description: "We build your dream home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased bg-slate-50/70`}>
        <ToastProvider>
          <Toaster />
          {children}
          <Navbar />
        </ToastProvider>
      </body>
    </html>
  );
}
