'use client';
import { useCardEditor } from '@/components/hooks/useCardEditor';
import Image from 'next/image';
import { Rnd } from 'react-rnd';
import { ButtonRounded } from '../../Button';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const EditCard11 = ({ title, description, color = "" }: Props) => {
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
   } = useCardEditor(title, description,"card11");

  return (
    <div className="col-start-6 col-end-11 row-start-8 row-end-13" style={{ width: '100%' }}>
      <div
        className={`flip-wrapper ${color} rounded-lg card-bg`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: "default",
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
                 rows={3} 
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
            <button onClick={saveToLocal}
            style={{ cursor: "pointer", pointerEvents: 'auto' }}>
                <Image src="/assets/Save.svg" alt="save" width={22} height={27} className="icons-clamp-lg"/>
              </button>
              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image src="/assets/Refresh.svg" alt="flip" width={22} height={27} className="icons-clamp-lg"/>
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
            backgroundColor: 'var(--skin-pink)',
          }}
          ref={containerRef}
        >
          {/* Top-right buttons */}
          <div className="absolute top-6 right-6" style={{ display: 'flex', flexDirection: 'column', gap: '9px', zIndex: 10 }}>
            <button onClick={saveToLocal}
            style={{ cursor: "pointer", pointerEvents: 'auto' }}>
              <Image src="/assets/Save.svg" alt="save" width={22} height={27} className="icons-clamp-lg"/>
            </button>
            <button onClick={handleFlip} style={{ cursor: "pointer", pointerEvents: 'auto' }}>
              <Image src="/assets/Refresh.svg" alt="flip" width={22} height={27} className="icons-clamp-lg"/>
            </button>
            <button
              onClick={handleDeleteImage}
              style={{ cursor: "pointer", pointerEvents: "auto" }}
            >
              <Image src="/assets/Trash.svg" alt="delete" width="22" height="27" className="icons-clamp-lg"/>
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
              <button className='upload-button-style-lg'
                onClick={handleUploadClick}
                style={{
                  color: "var(--hot-purple)",
                  border: "1px solid var(--hot-purple)",
                }}
              >
                Upload
              </button>

              <p
                className="card-description-md"
                style={{
                  marginBottom: '24px',
                  color: 'var(--hot-purple)',
                  textAlign: "center",
                lineHeight:'clamp(0.7rem, 1.5vw, 1.5rem)'
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

export default EditCard11;