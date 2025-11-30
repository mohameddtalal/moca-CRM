
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ButtonRounded } from '../../Button';
import { ButtonSmall } from '@/components/Button_sm';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const EditCard6 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // ADDED (editable states)
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);

  const handleFlip = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsFlipped(prev => !prev);
  };

  return (
    <div className="col-start-3 col-end-6 row-start-6 row-end-10" style={{ width: '100%' }}>
      <div
        className={`flip-wrapper ${color} rounded-lg card-bg`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: "default"
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ minHeight: 0 }}>
              
              {/* TEXTAREA TITLE */}
              <input
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-md whitespace-pre-line"
                style={{
                  color: 'var(--yellow)',
                  backgroundColor: 'transparent',
                  width: '100%',
                  scrollbarWidth: 'none',
                  resize: 'none',
                  outline:"none",
                  marginBottom:'0',
                  height:'auto-fit'
                  
                }}
              />

              {/* TEXTAREA DESCRIPTION */}
              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-sm mt-2"
                style={{
                  color: 'var(--yellow)',
                  backgroundColor: 'transparent',
                  width: '100%',
                  scrollbarWidth: 'none',
                  outline:"none",
                  resize: 'none',
                  height:'80%'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap:'9px' }}>
              <button
                onClick={() =>
                  console.log("Save clicked", {
                    title: editableTitle,
                    description: editableDescription
                  })
                }
                style={{ cursor:"pointer" }}
              >
                <Image 
                  src="/assets/Card10SaveEdit.svg"
                  alt="save"
                  width="22"
                  height="27"
                />
              </button>

              <button onClick={handleFlip} style={{ cursor:"pointer" }}>
                <Image 
                  src="/assets/Card10FlipEdit.svg"
                  alt="flip"
                  width="22"
                  height="27"
                />
              </button>
            </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonSmall/>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="flip-back-edit card-bg"
          style={{
            backgroundColor: 'var(--purple)',
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <div className=" absolute top-6 right-6 " style={{ display:'flex', flexDirection:'column', gap:'9px' }}>
            <button
              onClick={() =>
                console.log("Save clicked", {
                  title: editableTitle,
                  description: editableDescription
                })
              }
              style={{ cursor:"pointer" }}
            >
              <Image 
                src="/assets/Card10SaveEdit.svg"
                alt="save"
                width="14"
                height="19"
              />
            </button>

            <button onClick={handleFlip} style={{ cursor:"pointer" }}>
              <Image 
                src="/assets/Card10FlipEdit.svg"
                alt="flip"
                width="14"
                height="19"
              />
            </button>
          </div>

          <div
            style={{
              display:'flex',
              justifyContent:'center',
              flexDirection:'column',
              alignItems:'center',
              textAlign:'center',
              justifyItems:'center',
              gap:"20px"
            }}
          >
            <button
              onClick={() => document.getElementById("fileInputYellow")?.click()}
              style={{
                color: "var(--yellow)",
                backgroundColor: "transparent",
                border: "1px solid var(--yellow)",
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

            <input type="file" id="fileInputYellow" style={{ display:"none" }} />

            <p
              className="card-description-sm"
              style={{
                color: 'var(--yellow)',
                textTransform: 'capitalize',
                textAlign:"center"
              }}
            >
              Browse here to start uploading<br/>
              Supports PNG, JPG, JPEG, Video Max. xxx MB
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditCard6;
