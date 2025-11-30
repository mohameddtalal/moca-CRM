// components/Cards/Card11/Normal.tsx
'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ButtonRounded } from '../../Button';
import { ButtonSmall } from '@/components/Button_sm';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const EditCard5 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFlip = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsFlipped(prev => !prev);
  };

  const handleUploadClick = () => document.getElementById("fileInputPink")?.click();
  
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
    <div className="col-start-1 col-end-3 row-start-6 row-end-10" style={{ width: '100%' }}>
      <div
        className={`flip-wrapper ${color}  card-bg`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: "default",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          position: "relative",
          height: "100%",
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ minHeight: 0, flex: 1 }}>
              {/* TEXTAREA TITLE (replaces h2) */}
              <textarea
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-sm whitespace-pre-line"
                style={{
                  color: 'var(--green)',
                  backgroundColor: 'transparent',
                  width: '100%',
                  height:'auto',
                  outline:"none",
                  whiteSpace: 'pre-line',
                  scrollbarWidth: 'none',
                  resize: 'none',
                  marginBottom:'0'
                }}
              />

              {/* TEXTAREA DESCRIPTION (replaces p) */}
              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-sm mt-2 mb-2"
                style={{
                  color: 'var(--green)',
                  backgroundColor: 'transparent',
                  width: '100%',
                  height: "80%",
                  outline:"none",
                  scrollbarWidth: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <button
                onClick={() =>
                  console.log("Save clicked", {
                    title: editableTitle,
                    description: editableDescription
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="/assets/Card5SaveEdit.svg"
                  alt="save"
                  width="14"
                  height="22"
                />
              </button>

              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image
                  src="/assets/Card5FlipEdit.svg"
                  alt="flip"
                  width="14"
                  height="22"
                />
              </button>
            </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonSmall />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="flip-back-edit card-bg absolute w-full h-full overflow-hidden"
          style={{
            backgroundColor: 'var(--skin-pink)',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "rotateY(180deg)"
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
          <div className="absolute top-6 right-6" style={{ display: 'flex', flexDirection: 'column', gap: '9px', zIndex: 10 }}>
            <button
              onClick={() =>
                console.log("Save clicked", {
                  title: editableTitle,
                  description: editableDescription
                })
              }
              style={{ cursor: "pointer", pointerEvents: 'auto' }}
            >
              <Image
                src="/assets/Card5SaveEdit.svg"
                alt="save"
                width="13"
                height="16"
              />
            </button>

            <button onClick={handleFlip} style={{ cursor: "pointer", pointerEvents: 'auto' }}>
              <Image
                src="/assets/Card5FlipEdit.svg"
                alt="flip"
                width="13"
                height="16"
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
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyItems: 'center',
                gap: "20px"
              }}
            >
              <button
                onClick={handleUploadClick}
                style={{
                  color: "var(--green)",
                  backgroundColor: "transparent",
                  border: "1px solid var(--green)",
                  width: "78px",
                  height: "32px",
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
                className="card-description-sm"
                style={{
                  color: 'var(--green)',
                  textTransform: 'capitalize',
                  textAlign: "center"
                }}
              >
                Browse here to start uploading  
                Supports PNG, JPG, JPEG, Video Max. xxx MB
              </p>
            </div>
          )}
          <input type="file" id="fileInputPink" style={{ display: "none" }} onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default EditCard5;