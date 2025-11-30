'use client';

import { useState, useRef } from "react";
import { motion } from 'motion/react';
import { ButtonRounded } from "@/components/Button";
import Image from "next/image";

interface Card1Props {
  title: string;
  description: string;
  color: string;
}

const EditCard1 = ({ title, description, color }: Card1Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleUploadClick = () => document.getElementById("fileInputCard1")?.click();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedImage(URL.createObjectURL(file));
    setScale(1); // reset zoom
  };

  // Free zoom with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0001; // adjust sensitivity
    setScale(prev => prev + delta); // no limits
  };

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
        <div style={{ width: "100%", height: "100%" }}>
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
            {/* FRONT */}
            <div
              className="flip-front"
              style={{
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className={`card-bg ${color} p-4`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Title + Buttons Row */}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ minHeight: 0, flex: 1 }}>
                    {/* Editable Title (textarea) */}
                    <input
                      value={editableTitle}
                      onChange={(e) => setEditableTitle(e.target.value)}
                      className="card-title-lg whitespace-pre-line"
                      style={{
                        color: "var(--hot-purple)",
                        background: "transparent",
                        width: "100%",
                        paddingLeft: "clamp(56px, 8vw, 80px)",
                        whiteSpace: "pre-line",
                        scrollbarWidth: "none",
                        outline:"none",
                        resize: "none",
                        marginBottom: 0,
                      }}
                    />

                    {/* Editable Description */}
                    <textarea
                      value={editableDescription}
                      onChange={(e) =>
                        setEditableDescription(e.target.value)
                      }
                      className="card-description-lg mt-2 mb-2"
                      style={{
                        color: "var(--hot-purple)",
                        background: "transparent",
                        width: "100%",
                        scrollbarWidth: "none",
                        resize: "none",
                        outline:"none",
                        paddingTop:
                          "clamp(0.5rem, 7.125rem + -6.4453vw, 1.5rem)",
                      }}
                    />
                  </div>

                  {/* Edit Icons */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "9px",
                    }}
                  >
                    <button
                      onClick={() =>
                        console.log("Save clicked", {
                          title: editableTitle,
                          description: editableDescription,
                        })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        src="/assets/Card11SaveEdit.svg"
                        alt="save"
                        width={20}
                        height={25}
                      />
                    </button>

                    <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                      <Image
                        src="/assets/Card11FlipEdit.svg"
                        alt="flip"
                        width={20}
                        height={25}
                      />
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <div className="self-end mt-auto">
                  <ButtonRounded />
                </div>
              </div>
            </div>

            {/* BACK */}
            <div
              className="flip-back-edit"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                overflow: "hidden",
              }}
              ref={containerRef}
              onWheel={uploadedImage ? handleWheel : undefined}
              onMouseEnter={() => {
                if (uploadedImage) {
                  document.body.style.overflow = 'hidden';
                }
              }}
              onMouseLeave={() => {
                if (uploadedImage) {
                  document.body.style.overflow = 'auto';
                }
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "9px",
                    zIndex: 10,
                  }}
                >
                  <button
                    onClick={() =>
                      console.log("Save clicked", {
                        title: editableTitle,
                        description: editableDescription,
                      })
                    }
                    style={{ cursor: "pointer", pointerEvents: 'auto' }}
                  >
                    <Image
                      src="/assets/Card4SaveEdit.svg"
                      alt="save"
                      width="20"
                      height="25"
                    />
                  </button>

                  <button onClick={handleFlip} style={{ cursor: "pointer", pointerEvents: 'auto' }}>
                    <Image
                      src="/assets/Card4FlipEdit.svg"
                      alt="flip"
                      width="20"
                      height="25"
                    />
                  </button>
                </div>

                {uploadedImage ? (
                  <motion.div
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0}
                    dragMomentum={false}
                    className="absolute"
                    style={{
                      cursor: "grab",
                      touchAction: "none",
                    }}
                    whileDrag={{ cursor: "grabbing" }}
                  >
                    <img
                      src={uploadedImage}
                      alt="uploaded"
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '600px',
                        maxHeight: '600px',
                        userSelect: "none",
                        pointerEvents: "none",
                        transform: `scale(${scale})`,
                        transformOrigin: "center center",
                      }}
                    />
                  </motion.div>
                ) : (
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
                      onClick={handleUploadClick}
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

                    <p
                      className="card-description-md"
                      style={{
                        color: "var(--hot-purple)",
                        fontSize:
                          "clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)",
                        lineHeight:
                          "clamp(1.2rem, 1.5625vw - .5rem, 1.6rem)",
                        textTransform: "capitalize",
                        textAlign: "center",
                      }}
                    >
                      Browse here to start uploading
                      <br />
                      Supports PNG, JPG, JPEG, Video Max. xxx MB
                    </p>
                  </div>
                )}

                <input
                  type="file"
                  id="fileInputCard1"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard1;