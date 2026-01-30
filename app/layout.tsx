import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "24hr Broward Towing | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for 24hr Broward Towing. Fast towing service in Fort Lauderdale, Hollywood, and all of Broward County.",
  authors: [{ name: "Ryan Cwynar", url: "https://ryancwynar.com" }],
  creator: "Ryan Cwynar",
  publisher: "Ryan Cwynar",
  robots: "noindex, nofollow",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23f97316' width='100' height='100' rx='15'/><text x='50' y='70' text-anchor='middle' font-size='60' fill='white' font-family='system-ui'>B</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "24hr Broward Towing | Free Mockup",
    description: "A free website redesign mockup created by Ryan Cwynar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
