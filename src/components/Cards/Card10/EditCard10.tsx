'use client';
import Image from 'next/image';
import { Rnd } from 'react-rnd';
import { ButtonSmall } from '@/components/Button_sm';
import { useCardEditor } from '@/components/hooks/useCardEditor';

interface Props {
  title: string;
  description: string;
  color?: string;
}
const EditCard10 = ({ title, description, color = "" }: Props) => {
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
   containerRef
   } = useCardEditor(title, description,"card10");

  return (
    <div className="col-start-3 col-end-6 row-start-10 row-end-13" style={{ width: '100%' }}>
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
              <input
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-sm whitespace-pre-line"
                style={{
                  color: 'var(--yellow)',
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
                className="card-description-sm mt-2"
                 rows={3} 
                style={{
                  color: 'var(--yellow)',
                  background: 'transparent',
                  width: '100%',
                  height: '80%',
                  outline: 'none',
                  scrollbarWidth: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 'clamp(0.2rem, -0.25rem + 0.9766vw, 0.4rem)' }}>
            <button onClick={() => console.log("Save clicked", { title: editableTitle, description: editableDescription })}
            style={{ cursor: "pointer", pointerEvents: 'auto' }}>
                <Image src="/assets/Save6.svg" alt="save" width={14} height={20} className='icons-clamp-sm'/>
              </button>

              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image src="/assets/Refresh6.svg" alt="flip" width={14} height={20} className='icons-clamp-sm'/>
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
            backgroundColor: 'var(--green)',
          }}
          ref={containerRef}
        >
          {/* Top-right buttons */}
          <div className="absolute top-6 right-6" style={{ display: 'flex', flexDirection: 'column',gap: 'clamp(0.2rem, -0.25rem + 0.9766vw, 0.4rem)', zIndex: 10 }}>
              <button onClick={() => console.log("Save clicked", { title: editableTitle, description: editableDescription })}
            style={{ cursor: "pointer", pointerEvents: 'auto' }}>
              <Image src="/assets/Save6.svg" alt="save" width={14} height={20} className='icons-clamp-sm'/>
            </button>
            <button onClick={handleFlip} style={{ cursor: "pointer", pointerEvents: 'auto' }}>
              <Image src="/assets/Refresh6.svg" alt="flip" width={14} height={20} className='icons-clamp-sm'/>
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
              style={{ border: "2px dashed rgba(255,255,0,0.5)", background: "transparent", cursor: "grab", zIndex: 5 }}
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
                gap: "8px"
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

              <p
                className="card-description-sm"
                style={{
                  color: 'var(--yellow)',
                  textAlign: "center"
                }}
              >
                Browse here to start uploading<br />
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

export default EditCard10;
