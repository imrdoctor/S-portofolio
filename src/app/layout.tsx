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

export const metadata = {
  title: "Portfolio App",
  description: "Front End Developer Portfolio",
  keywords: "Front End Developer, Portfolio, Web Development",
  openGraph: {
    title: "Portfolio App",
    description: "Front End Developer Portfolio",
    site_name: "Mohamed Portfolio", 
    themeColor: "#000000",
    type: "website",
    url: "https://0dev.vercel.app/",    
    images: [ 
      {
        url: "https://media.discordapp.net/attachments/668451315348930571/1305393871156416562/New_Bitmap_image_-_Copy.png?ex=6732de47&is=67318cc7&hm=9964ac1861f84cfb1b2da4a59273a11ce0c3b4359fd8011e29c3acdfe45d090e",
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
      "https://media.discordapp.net/attachments/668451315348930571/1305393871156416562/New_Bitmap_image_-_Copy.png?ex=6732de47&is=67318cc7&hm=9964ac1861f84cfb1b2da4a59273a11ce0c3b4359fd8011e29c3acdfe45d090e",
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
        className={`${poppins .variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
