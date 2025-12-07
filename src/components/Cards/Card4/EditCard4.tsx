'use client';

import Image from 'next/image';
import { Rnd } from 'react-rnd';
import { ButtonSmall } from '@/components/buttons-arrow/Button_sm';
import { useCardEditor } from '@/components/hooks/useCardEditor';


interface Props {
  title: string;
  description: string;
  color?: string;
}

const EditCard4 = ({ title, description, color = "" }: Props) => {
 const {
     // flip
     isFlipped,
   handleFlip,
 
   title: editableTitle,
   setTitle: setEditableTitle,
   description: editableDescription,
   setDescription: setEditableDescription,
 
   uploadedImage,
   handleUploadClick,
   handleFileChange,
   resetImage: handleDeleteImage,
 
   size,
   setSize,
   position,
   setPosition,
   zoom,
   setZoom,
   handleWheel,
   inputId,
   containerRef,
   saveToLocal
   } = useCardEditor(title, description,"card4");

  return (
    <div className="col-start-11 col-end-13 row-start-1 row-end-6" style={{ width: "100%" }}>
      <div
        className={`flip-wrapper ${color} card-bg`}
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: "default",

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
                  scrollbarWidth:'none',
                  marginBottom: "0",
                }}
              />

              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-sm mt-2"
                 rows={3} 
                style={{
                  color: "var(--hot-purple)",
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  outline: "none",
                   scrollbarWidth:'none',
                  resize: "none"
                }}
              />
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column",gap: 'clamp(0.2rem, -0.25rem + 0.9766vw, 0.4rem)' }}>
              <button onClick={saveToLocal} style={{ cursor: "pointer" }}>
                <Image src="/assets/Save.svg" alt="save" width={14} height={19} className='icons-clamp-sm'/>
              </button>

              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image src="/assets/Refresh.svg" alt="flip" width={14} height={19} className='icons-clamp-sm'/>
              </button>
            </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonSmall />
          </div>
        </div>

        {/* ------------------------- BACK FACE ------------------------- */}
        <div
          className="flip-back-edit card-bg"
          style={{
            backgroundColor: "var(--energy-green)",
          }}
          ref={containerRef}
        >

          {/* Top-right controls */}
          <div className="absolute top-6 right-6" style={{ display: "flex", flexDirection: "column", gap: 'clamp(0.2rem, -0.25rem + 0.9766vw, 0.4rem)', zIndex: 10 }}>
            <button onClick={saveToLocal} style={{ cursor: "pointer" }}>
              <Image src="/assets/Save.svg" alt="save" width={14} height={19} className='icons-clamp-sm'/>
            </button>

            <button onClick={handleFlip} style={{ cursor: "pointer" }}>
              <Image src="/assets/Refresh.svg" alt="flip" width={14} height={19} className='icons-clamp-sm'/>
            </button>
            <button
              onClick={handleDeleteImage}
              style={{ cursor: "pointer", pointerEvents: "auto" }}
            >
              <Image src="/assets/Trash.svg" alt="delete" width="14" height="19" className='icons-clamp-sm'/>
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
              <button className='upload-button-style-sm'
                onClick={handleUploadClick}
                style={{
                  color: "var(--hot-purple)",
                  border: "1px solid var(--hot-purple)",
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
                id={inputId}
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