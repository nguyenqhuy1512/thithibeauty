'use client';
import { useEffect, useRef, useState } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Thi Thi Comestic",
//   description: "Beauty and Care",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const [isSticky, setIsSticky] = useState(false);
  const stickyElementRef = useRef<HTMLDivElement>(null);
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (

    <html lang='en'>
      <body className='relative'>
        <div ref={stickyElementRef} className={`z-20 h-auto w-full top-0 ${scrollY > 20 ? `sticky transition ease-in-out duration-300 bg-white` : `absolute`}`}>
          <Navbar />
        </div>
        <div className="relative z-0 h-full w-full" >
          {children}
        </div>
        <div className="relative z-5 mt-10">
          <Footer />
        </div>
      </body>
    </html>
    // <html lang="en" data-theme="winter">
    //   <body className={inter.className}>{children}</body>
    // </html>
  );
}
