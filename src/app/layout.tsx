import localFont from "next/font/local";
import "./globals.css";
import type { Viewport } from 'next';


export const viewport: Viewport = {
  themeColor: "#6366f1",
};

const poppins = localFont({
  src: "./fonts/Poppins-Black.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const cairo = localFont({
  src: "./fonts/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata = {
  title: "Portfolio App",
  description: "Front End Developer Portfolio",
  keywords: "Front End Developer, Portfolio, Web Development",
  openGraph: {
    title: "Portfolio App",
    description: "Front End Developer Portfolio",
    site_name: "Mohamed Portfolio",
    themeColor: "#6366f1",
    type: "website",
    url: "https://0dev.vercel.app/",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1304604701014233090/1305417406214180874/New_Bitmap_image_-_Copy.png?ex=6732f433&is=6731a2b3&hm=62ec37afc7c085a796471f8344f681ebc378605faba48648257c32c2f02b6213",
        width: 800,
        height: 600,
        alt: "Portfolio Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio App",
    description: "Front End Developer Portfolio",
    images: [
      "https://media.discordapp.net/attachments/1304604701014233090/1305417406214180874/New_Bitmap_image_-_Copy.png?ex=6732f433&is=6731a2b3&hm=62ec37afc7c085a796471f8344f681ebc378605faba48648257c32c2f02b6213",
    ],
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
        className={`${poppins.variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
