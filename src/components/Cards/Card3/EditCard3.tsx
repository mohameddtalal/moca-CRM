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

const EditCard3 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Drag + Resize state
  const [size, setSize] = useState({ width: 300, height: 300 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
   const [scale, setScale] = useState(1);

  // Zoom scale
  const [zoom, setZoom] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);
    const handleDeleteImage = () => {
  setUploadedImage(null);
  setZoom(1);
  setScale(1);
  setSize({ width: 300, height: 300 });
  setPosition({ x: 0, y: 0 });
};

  const handleFlip = () => setIsFlipped(prev => !prev);

  const handleUploadClick = () =>
    document.getElementById("fileInputCard3")?.click(); // UNIQUE ID FOR CARD3

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
    <div className="col-start-8 col-end-11 row-start-1 row-end-8" style={{ width: '100%' }}>
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
            <div style={{ minHeight: 0, flex: 1 }}>
              <textarea
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-lg whitespace-pre-line"
                style={{
                  color: 'var(--peach)',
                  backgroundColor: 'transparent',
                  width: '100%',
                  outline: "none",
                  scrollbarWidth: 'none',
                  resize: "none"
                }}
              />

              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-lg mt-2 mb-2"
                  rows={3} 
                style={{
                  color: 'var(--peach)',
                  backgroundColor: 'transparent',
                  width: '100%',
                  height: "100%",
                  outline: "none",
                  scrollbarWidth: 'none',
                  resize: "none"
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <button style={{ cursor: "pointer" }}>
                <Image src="/assets/Save3.svg" alt="save" width="22" height="27" className="icons-clamp-lg"/>
              </button>

              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image src="/assets/Refresh3.svg" alt="flip" width="22" height="27" className="icons-clamp-lg"/>
              </button>
            </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonRounded />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="flip-back-edit card-bg "
          style={{
            backgroundColor: `${color}`,
          }}
          ref={containerRef}
        >
          {/* Top-right controls */}
          <div className="absolute top-6 right-6" style={{ display: "flex", flexDirection: "column", gap: "9px", zIndex: 10 }}>
            <button style={{ cursor: "pointer", pointerEvents: "auto" }}>
              <Image src="/assets/Save3.svg" alt="save" width="22" height="27" className="icons-clamp-lg"/>
            </button>

            <button onClick={handleFlip} style={{ cursor: "pointer", pointerEvents: "auto" }}>
              <Image src="/assets/Refresh3.svg" alt="flip" width="22" height="27" className="icons-clamp-lg" />
            </button>
            <button
              onClick={handleDeleteImage}
              style={{ cursor: "pointer", pointerEvents: "auto" }}
            >
              <Image src="/assets/Trash3.svg" alt="delete" width="22" height="27" className="icons-clamp-lg"/>
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
              onDragStop={(e, d) => {
                setPosition({ x: d.x, y: d.y });
              }}
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
              <button className='upload-button-style-lg'
                onClick={handleUploadClick}
                style={{
                  color: "var(--peach)",
                  border: "1px solid var(--peach)",
                }}
              >
                Upload
              </button>

              <p className="card-description-md"
                style={{
                  color: 'var(--peach)',
                  lineHeight:'clamp(0.7rem, 1.5vw, 1.5rem)',
                  textTransform: 'capitalize',
                  textAlign:"center"
                }}>
                Browse here to start uploading. 
                Supports PNG, JPG, JPEG, Video Max. xxx MB
              </p>
            </div>
          )}

          <input id="fileInputCard3" type="file" style={{ display: "none" }} onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default EditCard3;
