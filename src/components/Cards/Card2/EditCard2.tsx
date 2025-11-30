'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';
import { ButtonSmall } from '@/components/Button_sm';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const EditCard2 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // For drag/resize
  const [size, setSize] = useState({ width: 300, height: 300 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [scale, setScale] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFlip = () => setIsFlipped(prev => !prev);
  const handleUploadClick = () => document.getElementById("fileInputYellow")?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedImage(URL.createObjectURL(file));
    setZoom(1);
    setSize({ width: 300, height: 300 });
    setPosition({ x: 0, y: 0 });
  };
  // Free zoom with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0001; // adjust sensitivity
    setScale(prev => prev + delta); // no limits
  };


  return (
    <div className="col-start-6 col-end-8 row-start-1 row-end-6 w-full h-full relative">
      <div
        className={`flip-wrapper ${color} rounded-lg card-bg`}
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
              <textarea
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-md whitespace-pre-line"
                style={{
                  color: 'var(--skin-pink)',
                  backgroundColor: 'transparent',
                  width: '100%',
                  whiteSpace: 'pre-line',
                  outline: "none",
                  scrollbarWidth: 'none',
                  resize: 'none',
                  marginBottom: '0'
                }}
              />
              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-sm mt-2"
                style={{
                  color: 'var(--skin-pink)',
                  backgroundColor: 'transparent',
                  width: '100%',
                  height: "100%",
                  outline: "none",
                  scrollbarWidth: 'none',
                  resize: 'none'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <button onClick={() => console.log("Save clicked", { title: editableTitle, description: editableDescription })} style={{ cursor: "pointer" }}>
                <Image src="/assets/Card2SaveEdit.svg" alt="save" width="14" height="19" />
              </button>
              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image src="/assets/Card2FlipEdit.svg" alt="flip" width="14" height="19" />
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
            backgroundColor: `${color}`,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
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
          {/* Top-right buttons */}
          <div
            className="absolute top-6 right-6"
            style={{ display: "flex", flexDirection: "column", gap: "9px", zIndex: 10 }}
          >
            <button
              onClick={() => console.log("Save clicked", { title: editableTitle, description: editableDescription })}
              style={{ cursor: "pointer", pointerEvents: "auto" }}
            >
              <Image src="/assets/Card2SaveEdit.svg" alt="save" width="14" height="19" />
            </button>
            <button
              onClick={handleFlip}
              style={{ cursor: "pointer", pointerEvents: "auto" }}
            >
              <Image src="/assets/Card2FlipEdit.svg" alt="flip" width="14" height="19" />
            </button>
          </div>

          {uploadedImage ? (
            <Rnd
              bounds="parent"
              size={{ width: size.width * zoom, height: size.height * zoom }}
              position={position}
              onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
              onResizeStop={(e, direction, ref, delta, pos) => {
                setSize({ width: ref.offsetWidth / zoom, height: ref.offsetHeight / zoom });
                setPosition({ x: pos.x, y: pos.y });
              }}
              enableResizing={{
                top: true, right: true, bottom: true, left: true,
                topRight: true, bottomRight: true, bottomLeft: true, topLeft: true,
              }}
              style={{
                position: "absolute",
                cursor: "grab",
                zIndex: 5,
                border: "2px dashed rgba(255,105,180,0.5)", // optional for handle visibility
                borderRadius: "4px",
                background: "transparent",
              }}
              onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
                e.preventDefault();
                const delta = -e.deltaY * 0.0015;
                setZoom(prev => Math.min(Math.max(prev + delta, 0.1), 3));
              }}
            >
              <img
                src={uploadedImage}
                alt="uploaded"
                style={{
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              />
            </Rnd>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: "20px"
              }}
            >
              <button
                onClick={handleUploadClick}
                style={{
                  color: "var(--skin-pink)",
                  backgroundColor: "transparent",
                  border: "1px solid var(--skin-pink)",
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
              <p className="card-description-sm" style={{ color: 'var(--skin-pink)', textTransform: 'capitalize' }}>
                Browse here to start uploading. Supports PNG, JPG, JPEG, Video Max. xxx MB
              </p>
            </div>
          )}

          <input type="file" id="fileInputYellow" style={{ display: "none" }} onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default EditCard2;
