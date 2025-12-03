"use client"; 
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string | null; // <-- added
}

export default function AuthLayout({ children, backgroundImage }: AuthLayoutProps) {
  const defaultBg = "/assets/Login.png";


  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased hide-scrollbar flex flex-col relative w-full h-full`}
    >
      {/* Background */} 
      {backgroundImage ? (
        <div className="-z-10 absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`}} /> ) : (
        <div className="-z-10 absolute inset-0"> <Image src={defaultBg} alt="background" fill priority className="object-cover" /> </div> )}

      {/* Content */}
      <div className="flex flex-row ml-auto h-full w-full relative z-10">
        <div className="flex items-center justify-center flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
