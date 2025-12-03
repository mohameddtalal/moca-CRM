'use client'; // keep this if children (LoginEdit) uses state/events
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased hide-scrollbar flex flex-col relative w-full h-full`}
    >
      {/* Background Image */}
      <div className="-z-10 h-full ">
        <Image
          src="/assets/Login.png"
          alt="background"
          fill
          priority
          className="object-cover h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-row ml-auto h-full w-full">
        <div className="flex items-center justify-center flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
