'use client'

import { useState } from "react";
import { ButtonRounded } from "@/components/buttons-arrow/Button";
import Image from 'next/image';
import { useCardEditor } from "@/components/hooks/useCardEditor";
import { useRouter } from "next/navigation";

interface Card1Props {
  title: string;
  description: string;
  color: string;
}

const Card1 = ({ title, description, color }: Card1Props) => {
  const router = useRouter();
   const {
    handleSelect,
    isFlipped,
    handleFlip,
     } = useCardEditor(title, description,"card1");
   

  return (
    <div
      className="relative col-start-1 col-end-6 row-start-1 row-end-6"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* PROFILE PHOTO */}
      <div className="absolute top-0 left-0 rounded-full overflow-hidden z-30">
        <img
          src="assets/profile-photo.svg"
          alt="Profile"
          className="w-[56px] h-[56px] object-cover"
        />
      </div>
        <div
          // onClick={handleFlip}
          className={`flip-wrapper ${color} card-bg p-4 relative`}
          style={{
            clipPath: "url(#cutout-rounded-px)",
            WebkitClipPath: "url(#cutout-rounded-px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            minHeight: 0,
            overflow: "hidden",
            // transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            cursor: "default",
          }}
        >
          {/* FRONT */}
          <div
            className="flip-front"
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <div style={{ minHeight: 0 }}>
              <h2
                className="card-title-lg whitespace-pre-line"
                style={{
                  color: "var(--hot-purple)",
                  paddingLeft: "clamp(56px, 8vw, 80px)",
                }}
              >
                {title}
              </h2>

              <p
                className="card-description-lg"
                style={{
                  color: "var(--hot-purple)",
                  paddingTop: "clamp(0.5rem, 7.125rem + -6.4453vw, 1.5rem)",
                }}
              >
                {description}
              </p>
            </div>

            <div className="self-end mt-auto">
              <ButtonRounded />
            </div>
          </div>

          {/* BACK */}
          <div className="flip-back card-back-shadow">
            <p
              className="card-description-lg"
              style={{
                marginBottom: "24px",
                color: "var(--white)",
                fontSize: 'clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)',
                textTransform: 'capitalize'
              }}
            >
              {description}
            </p>

            <div className="card-back-scroller overflow-y-scroll">
              <div style={{ display: "inline-flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  className="card-button btn"
                  style={{ backgroundColor: "var(--hot-purple)", color: "var(--white)" }}
                >
                  Label
                </button>

                <button
                  className="card-button"
                  style={{ backgroundColor: "var(--white)", color: "var(--hot-purple)" }}
                >
                  Label
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Card1;
