import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Ramachandran",
  description: "UC Berkeley EECS student specializing in full-stack engineering and AI applications. Portfolio of projects, experience, and skills.",
  metadataBase: new URL("https://kyleramachandran.com"),
  openGraph: {
    title: "Kyle Ramachandran",
    description: "UC Berkeley EECS student specializing in full-stack engineering and AI applications.",
    url: "https://kyleramachandran.com",
    siteName: "Kyle Ramachandran",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kyle Ramachandran",
    description: "UC Berkeley EECS student specializing in full-stack engineering and AI applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
