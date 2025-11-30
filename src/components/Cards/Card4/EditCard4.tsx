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

const EditCard4 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);

  // IMAGE STATE
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Dragging + resizing + zoom
  const [size, setSize] = useState({ width: 300, height: 300 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFlip = () => setIsFlipped(prev => !prev);

  // Upload button
  const handleUploadClick = () =>
    document.getElementById("fileInputCard4")?.click(); // UNIQUE ID FOR CARD4

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedImage(URL.createObjectURL(file));

    // Reset transformation
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setSize({ width: 300, height: 300 });
  };

  return (
    <div className="col-start-11 col-end-13 row-start-1 row-end-6" style={{ width: "100%" }}>
      <div
        className={`flip-wrapper ${color} card-bg`}
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: "default",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          position: "relative",
          height: "100%",
        }}
      >

        {/* ------------------------- FRONT FACE ------------------------- */}
        <div className="flip-front">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ minHeight: 0, flex: 1 }}>
              <input
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-md whitespace-pre-line"
                style={{
                  color: "var(--hot-purple)",
                  backgroundColor: "transparent",
                  width: "100%",
                  outline: "none",
                  marginBottom: "0"
                }}
              />

              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-sm mt-2"
                style={{
                  color: "var(--hot-purple)",
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  outline: "none",
                  resize: "none"
                }}
              />
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              <button style={{ cursor: "pointer" }}>
                <Image src="/assets/Card4SaveEdit.svg" alt="save" width={14} height={19} />
              </button>

              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image src="/assets/Card4FlipEdit.svg" alt="flip" width={14} height={19} />
              </button>
            </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonSmall />
          </div>
        </div>

        {/* ------------------------- BACK FACE ------------------------- */}
        <div
          className="flip-back-edit card-bg absolute w-full h-full overflow-hidden"
          style={{
            backgroundColor: "var(--energy-green)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "rotateY(180deg)"
          }}
          ref={containerRef}
        >

          {/* Top-right controls */}
          <div className="absolute top-6 right-6" style={{ display: "flex", flexDirection: "column", gap: "9px", zIndex: 10 }}>
            <button style={{ cursor: "pointer" }}>
              <Image src="/assets/Card4SaveEdit.svg" alt="save" width={14} height={19} />
            </button>

            <button onClick={handleFlip} style={{ cursor: "pointer" }}>
              <Image src="/assets/Card4FlipEdit.svg" alt="flip" width={14} height={19} />
            </button>
          </div>

          {/* ---------------- IMAGE AREA ---------------- */}
          {uploadedImage ? (
            <Rnd
              bounds="parent"
              size={{
                width: size.width * zoom,
                height: size.height * zoom
              }}
              position={position}
              onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
              onResizeStop={(e, direction, ref, delta, pos) => {
                setSize({
                  width: ref.offsetWidth / zoom,
                  height: ref.offsetHeight / zoom
                });
                setPosition(pos);
              }}
              onWheel={(e: React.WheelEvent) => {
                e.preventDefault();
                const delta = -e.deltaY * 0.0015;
                setZoom(prev => Math.min(Math.max(prev + delta, 0.2), 4));
              }}
              enableResizing={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true
              }}
              style={{
                border: "2px dashed rgba(0,0,0,0.4)",
                background: "transparent",
                cursor: "grab",
                zIndex: 5
              }}
            >
              <img
                src={uploadedImage}
                alt="uploaded-img"
                style={{
                  width: "100%",
                  height: "100%",
                  userSelect: "none",
                  pointerEvents: "none"
                }}
              />
            </Rnd>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                gap: "20px",
                alignItems: "center"
              }}
            >
              <button
                onClick={handleUploadClick}
                style={{
                  color: "var(--hot-purple)",
                  backgroundColor: "transparent",
                  border: "1px solid var(--hot-purple)",
                  width: "78px",
                  height: "32px",
                  borderRadius: "1536px",
                  cursor: "pointer"
                }}
              >
                Upload
              </button>

              <p className="card-description-sm" style={{ color: "var(--hot-purple)" }}>
                Browse here to start uploading  
                Supports PNG, JPG, JPEG, Video Max. xxx MB
              </p>
            </div>
          )}

          <input
            id="fileInputCard4"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EditCard4;
