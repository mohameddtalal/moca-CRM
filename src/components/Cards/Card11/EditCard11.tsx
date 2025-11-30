'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';
import { ButtonRounded } from '../../Button';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const EditCard11 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Drag & Resize state
  const [size, setSize] = useState({ width: 400, height: 400 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFlip = () => setIsFlipped(prev => !prev);

  const handleSave = () => {
    console.log("Save clicked", { title: editableTitle, description: editableDescription });
  };

  const handleUploadClick = () => document.getElementById("fileInputCard11")?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedImage(URL.createObjectURL(file));
    setZoom(1);
    setSize({ width: 400, height: 400 });
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="col-start-6 col-end-11 row-start-8 row-end-13" style={{ width: '100%' }}>
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
            <div style={{ flex: 1, minHeight: 0 }}>
              <input
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-lg whitespace-pre-line"
                style={{
                  color: 'var(--hot-purple)',
                  background: 'transparent',
                  width: '100%',
                  outline: 'none',
                  marginBottom: 0,
                  scrollbarWidth: 'none',
                  resize: 'none'
                }}
              />
              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-lg mt-2 mb-2"
                style={{
                  color: 'var(--hot-purple)',
                  background: 'transparent',
                  width: '100%',
                  height: '80%',
                  outline: 'none',
                  scrollbarWidth: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <button onClick={handleSave} style={{ cursor: "pointer" }}>
                <Image src="/assets/Card11SaveEdit.svg" alt="save" width={22} height={27} />
              </button>
              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image src="/assets/Card11FlipEdit.svg" alt="flip" width={22} height={27} />
              </button>
            </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonRounded />
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
        >
          {/* Top-right buttons */}
          <div className="absolute top-6 right-6" style={{ display: 'flex', flexDirection: 'column', gap: '9px', zIndex: 10 }}>
            <button onClick={handleSave} style={{ cursor: "pointer", pointerEvents: 'auto' }}>
              <Image src="/assets/Card11SaveEdit.svg" alt="save" width={22} height={27} />
            </button>
            <button onClick={handleFlip} style={{ cursor: "pointer", pointerEvents: 'auto' }}>
              <Image src="/assets/Card11FlipEdit.svg" alt="flip" width={22} height={27} />
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
                setPosition(pos);
              }}
              onWheel={(e: React.WheelEvent) => {
                e.preventDefault();
                const delta = -e.deltaY * 0.0015;
                setZoom(prev => Math.min(Math.max(prev + delta, 0.2), 4));
              }}
              enableResizing={{
                top: true, right: true, bottom: true, left: true,
                topRight: true, bottomRight: true, bottomLeft: true, topLeft: true
              }}
              style={{ border: "2px dashed rgba(255,0,255,0.5)", background: "transparent", cursor: "grab", zIndex: 5 }}
            >
              <img
                src={uploadedImage}
                alt="uploaded-img"
                style={{ width: "100%", height: "100%", userSelect: "none", pointerEvents: "none" }}
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
                gap: "24px"
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
                  cursor: "pointer"
                }}
              >
                Upload
              </button>

              <p
                className="card-description-md"
                style={{
                  marginBottom: '24px',
                  color: 'var(--hot-purple)',
                  textAlign: "center"
                }}
              >
                Browse here to start uploading<br />
                Supports PNG, JPG, JPEG, Video Max. xxx MB
              </p>
            </div>
          )}

          <input type="file" id="fileInputCard11" style={{ display: "none" }} onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default EditCard11;
