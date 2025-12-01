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

const EditCard6 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Drag + Resize state
  const [size, setSize] = useState({ width: 300, height: 300 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Zoom scale
  const [zoom, setZoom] = useState(1);
   const [scale, setScale] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFlip = () => setIsFlipped(prev => !prev);
    const handleDeleteImage = () => {
  setUploadedImage(null);
  setZoom(1);
  setScale(1);
  setSize({ width: 300, height: 300 });
  setPosition({ x: 0, y: 0 });
};

  const handleUploadClick = () => document.getElementById("fileInputCard6")?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedImage(URL.createObjectURL(file));

    // Reset transformations
    setZoom(1);
    setSize({ width: 300, height: 300 });
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="col-start-3 col-end-6 row-start-6 row-end-10" style={{ width: '100%' }}>
      <div
        className={`flip-wrapper ${color} card-bg`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: "default",
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <input
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-md"
                style={{
                  marginBottom:"0",
                  backgroundColor: 'transparent',
                  color: 'var(--yellow)',
                  scrollbarWidth: 'none',
                  width: '100%',
                  outline: 'none',
                }}
              />
              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-sm mt-2"
                 rows={3} 
                style={{
                  backgroundColor: 'transparent',
                  width: '100%',
                  outline: 'none',
                  color: 'var(--yellow)',
                  scrollbarWidth: 'none',
                  resize: 'none',
                  height: '80%',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column',gap: 'clamp(0.2rem, -0.25rem + 0.9766vw, 0.4rem)' }}>
              <button style={{ cursor: "pointer" }}>
                <Image src="/assets/Save6.svg" alt="save" width={14} height={17} className='icons-clamp-sm'/>
              </button>
              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image src="/assets/Refresh6.svg" alt="flip" width={14} height={17} className='icons-clamp-sm'/>
              </button>
            </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonSmall />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="flip-back-edit card-bg"
          style={{
            backgroundColor: 'var(--purple)',
          }}
          ref={containerRef}
        >
          {/* Top-right controls */}
          <div className="absolute top-6 right-6" style={{ display: "flex", flexDirection: "column", gap: 'clamp(0.2rem, -0.25rem + 0.9766vw, 0.4rem)', zIndex: 10 }}>
            <button style={{ cursor: "pointer", pointerEvents: "auto" }}>
              <Image src="/assets/Save6.svg" alt="save" width={14} height={19} className='icons-clamp-sm'/>
            </button>
            <button onClick={handleFlip} style={{ cursor: "pointer", pointerEvents: "auto" }}>
              <Image src="/assets/Refresh6.svg" alt="flip" width={14} height={19} className='icons-clamp-sm'/>
            </button>
            <button
              onClick={handleDeleteImage}
              style={{ cursor: "pointer", pointerEvents: "auto" }}
            >
              <Image src="/assets/Trash6.svg" alt="delete" width="14" height="19" className='icons-clamp-sm'/>
            </button>
          </div>

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
                topLeft: true,
              }}
              style={{
                border: "2px dashed rgba(255,105,180,0.6)",
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
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: "20px"
              }}
            >
              <button className='upload-button-style-sm'
                onClick={handleUploadClick}
                style={{
                  color: "var(--yellow)",
                  border: "1px solid var(--yellow)",
                }}
              >
                Upload
              </button>

              <p className="card-description-sm"
                style={{
                  color: 'var(--yellow)',
                  textTransform: 'capitalize',
                  textAlign: "center"
                }}
              >
                Browse here to start uploading. <br />
                Supports PNG, JPG, JPEG, Video Max. xxx MB
              </p>
            </div>
          )}

          <input
            id="fileInputCard6"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EditCard6;
