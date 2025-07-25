import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "This Looks Nice",
  description: "Web and media development and production services",
  generator: "v0.dev + human",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{
        colorScheme: "light",
        scrollBehavior: "smooth",
      }}
    >
      <body>{children}</body>
    </html>
  );
}
