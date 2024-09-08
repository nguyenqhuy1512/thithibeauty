import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thi Thi Beauty",
  description: "Beauty and Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang='en'>
      <body className='relative '>
        <div className="z-20 relative">
          <Navbar />
        </div>
        <div className="z-10">
          {children}
        </div>
        <div className="z-14 overflow-x-hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
