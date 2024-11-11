import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: "#000000",

}

const poppins  = localFont({
  src: "./fonts/Poppins-Black.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800  900",
});
const cairo  = localFont({
  src: "./fonts/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800  900",
});

export const metadata: Metadata = {
  title: "Portofolio App",
  description: "Front End Developer Portfolio",
  keywords: "Front End Developer, Portfolio, Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins .variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
