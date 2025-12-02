'use client';
import { useCardEditor } from '@/components/hooks/useCardEditor';
import { Rnd } from "react-rnd";
import { ButtonRounded } from "@/components/Button";
import Image from "next/image";

interface Card1Props {
  title: string;
  description: string;
  color: string;
}

const EditCard1 = ({ title, description, color = "" }: Card1Props) => {
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
   } = useCardEditor(title, description,"card1");
  

  return (
    <div className="relative col-start-1 col-end-6 row-start-1 row-end-6">
      <div className="absolute top-0 left-0 rounded-full overflow-hidden z-30">
        <img src="assets/profile-photo.svg" alt="Profile" className="w-[56px] h-[56px] object-cover" />
      </div>

      <div style={{ clipPath: "url(#cutout-rounded-px)", WebkitClipPath: "url(#cutout-rounded-px)", width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
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
            {/* FRONT FACE */}
            <div className="flip-front" style={{ width: "100%", height: "100%", backfaceVisibility: "hidden" }}>
              <div className={`card-bg ${color} p-4`} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: 1, minHeight: 0 }}>
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
                        scrollbarWidth: 'none',
                        outline: 'none',
                        resize: 'none',
                        marginBottom: 0
                      }}
                    />
                    <textarea
                      value={editableDescription}
                      onChange={(e) => setEditableDescription(e.target.value)}
                      className="card-description-lg mt-2 mb-2"                 
                       rows={3} 
                      style={{
                      paddingTop: "clamp(0.5rem, 7.125rem + -6.4453vw, 1.5rem)",
                        color: "var(--hot-purple)",
                        background: "transparent",
                        width: "100%",
                        outline: 'none',
                        scrollbarWidth: 'none',
                        resize: 'none',
                        height: '80%',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    <button
                      onClick={() => console.log({ title: editableTitle, description: editableDescription })}
                      style={{ cursor: 'pointer' }}
                    >
                      <Image src="/assets/Save.svg" alt="save" width={20} height={25} className="icons-clamp-lg"/>
                    </button>
                    <button onClick={handleFlip} style={{ cursor: 'pointer' }}>
                      <Image src="/assets/Refresh.svg" alt="flip" width={20} height={25} className="icons-clamp-lg"/>
                    </button>
                  </div>
                </div>
                <div className="self-end mt-auto"><ButtonRounded /></div>
              </div>
            </div>

            {/* BACK FACE */}
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
                <div className="absolute top-6 right-6" style={{ display: "flex", flexDirection: "column", gap: '9px', zIndex: 10 }}>
                  <button onClick={() => console.log({ title: editableTitle, description: editableDescription })} style={{cursor:"pointer"}}>
                    <Image src="/assets/Save.svg" alt="save" width={20} height={20} className="icons-clamp-lg"/>
                  </button>
                  <button onClick={handleFlip} style={{cursor:"pointer"}}>
                    <Image src="/assets/Refresh.svg" alt="flip" width={20} height={20} className="icons-clamp-lg"/>
                  </button>
                  <button
                   onClick={handleDeleteImage}
                   style={{ cursor: "pointer", pointerEvents: "auto" }}
                  >
                   <Image src="/assets/Trash.svg" alt="delete" width="20" height="20" className="icons-clamp-lg"/>
                  </button>
                </div>

                {uploadedImage ? (
                  <Rnd
                    bounds="parent"
                    size={{ width: size.width * zoom, height: size.height * zoom }}
                    position={position}
                    onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
                    onResizeStop={(e, dir, ref, delta, pos) => {
                      setSize({ width: ref.offsetWidth / zoom, height: ref.offsetHeight / zoom });
                      setPosition(pos);
                    }}
                    onWheel={(e: React.WheelEvent) => {
                      e.preventDefault();
                      const delta = -e.deltaY * 0.0015;
                      setZoom(prev => Math.min(Math.max(prev + delta, 0.2), 4));
                    }}
                    enableResizing={{ top:true,right:true,bottom:true,left:true,topRight:true,bottomRight:true,bottomLeft:true,topLeft:true }}
                    style={{ border: "2px dashed rgba(255,0,255,0.5)", background: "transparent", cursor: "grab", zIndex: 5 }}
                  >
                    <img
                      src={uploadedImage}
                      alt="uploaded"
                      style={{ width: "100%", height: "100%", userSelect: "none", pointerEvents: "none" }}
                    />
                  </Rnd>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", textAlign: "center" }}>
                    <button className="upload-button-style-lg"
                      onClick={handleUploadClick}
                      style={{
                        color: "var(--hot-purple)",
                        border: "1px solid var(--hot-purple)",
                      }}
                    >
                      Upload
                    </button>
                    <p className="card-description-md" style={{ color: "var(--hot-purple)", lineHeight:'clamp(0.7rem, 1.5vw, 1.5rem)'}}>
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
        </div>
      </div>
    </div>
  );
};

export default EditCard1;
