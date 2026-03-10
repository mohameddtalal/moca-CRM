"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";

interface AnimatedToggleProps {
  onToggle?: (state: "signin" | "home") => void;
  activeTab?: "signin" | "home";
}

export default function AnimatedToggle({
  onToggle,
  activeTab: externalActiveTab,
}: AnimatedToggleProps) {
  const [internalActiveTab, setInternalActiveTab] =
    useState<"signin" | "home">("home");
  // Start in the M-logo / primary-color state for moca
  const [isMLogo, setIsMLogo] = useState(true);

  const activeTab = externalActiveTab || internalActiveTab;

  const handleTabClick = (
    tab: "signin" | "home",
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setInternalActiveTab(tab);
    onToggle?.(tab);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMLogo((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center translate-x-[-12px]">
      <div className="flex items-center relative">
        {/* Logo Part */}
        <motion.div
          className={`w-9 h-9 rounded-full ${
            isMLogo ? "bg-[var(--color-primary)]" : "bg-black"
          } flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden z-20`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="http://contact.getmoca.co:8000/dashboard/control-room/design-settings">
            <AnimatePresence mode="wait">
              <motion.div
                key={isMLogo ? "m-logo" : "x-logo"}
                initial={{ y: 20, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -20, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.3, ease: "backOut" }}
                className="flex items-center justify-center"
                onClick={handleLogoClick}
              >
                <Image
                  src={
                    isMLogo
                      ? "/assets/mlogo.svg"
                      : "/assets/logogreen.svg"
                  }
                  alt="Logo"
                  width={20}
                  height={20}
                  className={
                    isMLogo
                      ? "saturate-[10000%] hue-rotate-[10deg]"
                      : ""
                  }
                />
              </motion.div>
            </AnimatePresence>
          </Link>
        </motion.div>

        {/* Simple line using existing colors */}
        <div
          className={styles.line}
          style={{
            backgroundColor: isMLogo
              ? "var(--color-primary)"
              : "var(--black)",
            opacity: 1,
          }}
        />

        {/* Pill Toggle */}
        <div
          className={`
            relative
            rounded-full
            p-[1.5px]
            ${
              isMLogo
                ? "bg-[var(--color-primary)]"
                : "bg-white/20"
            }
            z-20 -ml-1
          `}
        >
          <div
            className={`
              relative
              rounded-full
              px-3 py-2
              flex items-center gap-4
              text-[12px]
              ${
                isMLogo
                  ? "bg-[var(--color-primary)]"
                  : "bg-black"
              }
            `}
          >
            {/* Inner Rounded Border */}
            <div className="absolute inset-[2px] rounded-full border border-[#808080] pointer-events-none" />

            {/* Sign In */}
            <span
              className={`
                transition-all duration-300 relative cursor-pointer z-10
                ${
                  activeTab === "signin"
                    ? isMLogo
                      ? "text-yellow-300"
                      : "text-[#00FF8B]"
                    : "text-[#808080]"
                }
              `}
              onClick={(e) =>
                handleTabClick("signin", e)
              }
            >
              Sign in
              {activeTab === "signin" && (
                <motion.div
                  layoutId="underline"
                  className={`absolute left-0 right-0 h-[1.5px] ${
                    isMLogo
                      ? "bg-yellow-300"
                      : "bg-[#00FF8B]"
                  }`}
                />
              )}
            </span>

            <span className="text-[#808080] font-thin z-10">
              |
            </span>

            {/* Homepage */}
            <span
              className={`
                transition-all duration-300 relative cursor-pointer z-10
                ${
                  activeTab === "home"
                    ? isMLogo
                      ? "text-yellow-300"
                      : "text-[#00FF8B]"
                    : "text-[#808080]"
                }
              `}
              onClick={(e) =>
                handleTabClick("home", e)
              }
            >
              Homepage
              {activeTab === "home" && (
                <motion.div
                  layoutId="underline"
                  className={`absolute left-0 right-0 h-[1.5px] ${
                    isMLogo
                      ? "bg-yellow-300"
                      : "bg-[#00FF8B]"
                  }`}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

