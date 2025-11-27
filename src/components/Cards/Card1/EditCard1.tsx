'use client'

import { useState } from "react";
import { ButtonRounded } from "@/components/Button";
import Image from 'next/image';

interface Card1Props {
  title: string;
  description: string;
  color: string;
}

const Card1 = ({ title, description, color }: Card1Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="relative col-start-1 col-end-6 row-start-1 row-end-6"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >

      {/* Profile Image */}
      <div className="absolute top-0 left-0 rounded-full overflow-hidden z-30">
        <img
          src="assets/profile-photo.svg"
          alt="Profile"
          className="w-[56px] h-[56px] object-cover"
        />
      </div>

      {/* ClipPath Wrapper */}
      <div
        style={{
          clipPath: "url(#cutout-rounded-px)",
          WebkitClipPath: "url(#cutout-rounded-px)",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >

        {/* --- FIXED FLIP STRUCTURE --- */}
        <div style={{  width: "100%", height: "100%" }}>
          <div
            className="flip-inner"
            style={{
              width: "100%",
              height: "100%",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              position: "relative",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >

            {/* ------------ FRONT ------------ */}
            <div
              className="flip-front"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
            
              }}
            >
              <div className={`card-bg ${color} p-4`} style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>

                {/* Title + Right Actions */}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ minHeight: 0 }}>
                    <h2
                      className="card-title-lg whitespace-pre-line"
                      style={{
                        color: "var(--purple)",
                        paddingLeft: "clamp(56px, 8vw, 80px)",
                      }}
                    >
                      {title}
                    </h2>

                    <p
                      className="card-description-lg mt-2 mb-2"
                      style={{
                        color: "var(--purple)",
                        paddingTop:
                          "clamp(0.5rem, 7.125rem + -6.4453vw, 1.5rem)",
                      }}
                    >
                      {description}
                    </p>
                  </div>

                  {/* Edit Buttons */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "9px",
                    }}
                  >
                    <button onClick={() => console.log("Save clicked")} style={{ cursor: "pointer" }}>
                      <Image src="/assets/Card11SaveEdit.svg" alt="save" width={40} height={40} />
                    </button>

                    <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                      <Image src="/assets/Card11FlipEdit.svg" alt="flip" width={40} height={40} />
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="self-end mt-auto">
                  <ButtonRounded />
                </div>
              </div>
            </div>

            {/* ------------ BACK ------------ */}
            <div
              className="flip-back-edit"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div
                className="card-bg"
                style={{
                  backgroundColor: "var(--yellow)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >

                {/* Edit Buttons */}
                <div
                  className="absolute top-6 right-6"
                  style={{ display: "flex", flexDirection: "column", gap: "9px" }}
                >
                  <button onClick={() => console.log("Save clicked")} style={{ cursor: "pointer" }}>
                    <Image src="/assets/Card4SaveEdit.svg" alt="save" width="25" height="30" />
                  </button>

                  <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                    <Image src="/assets/Card4FlipEdit.svg" alt="flip" width="25" height="30" />
                  </button>
                </div>

                {/* Upload Section */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "24px",
                  }}
                >
                  <button
                    onClick={() =>
                      document.getElementById("hiddenFileInput2")?.click()
                    }
                    style={{
                      color: "var(--hot-purple)",
                      backgroundColor: "transparent",
                      border: "1px solid var(--hot-purple)",
                      width: "94px",
                      height: "48px",
                      borderRadius: "1536px",
                      fontSize: "clamp(0.5rem, 1vw + 0.2rem, 0.8rem)",
                      fontFamily: "GT Walsheim",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                  >
                    Upload
                  </button>

                  <input type="file" id="hiddenFileInput2" style={{ display: "none" }} />

                  <p
                    className="card-description-md"
                    style={{
                      color: "var(--hot-purple)",
                      fontSize: "clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)",
                      lineHeight: "clamp(1.2rem, 1.5625vw - .5rem, 1.6rem)",
                      textTransform: "capitalize",
                      textAlign: "center",
                    }}
                  >
                    Browse here to start uploading <br />
                    Supports PNG, JPG, JPEG, Video Max. xxx MB
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Card1;
