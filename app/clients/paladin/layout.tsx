import type React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/paladin/theme-provider";
import { Header } from "@/components/paladin/header"; // Import the new Header component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Rebuild Proposal - Paladin Management Group",
  description:
    "A strategic plan to modernize, optimize, and elevate your website for growth.",
  generator: "v0.dev + human",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
}
        `}</style>
      </Head>
      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header /> {/* Add the Header component here */}
          {children}
        </ThemeProvider>
      </div>
    </>
  );
}
