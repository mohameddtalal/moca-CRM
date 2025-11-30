// components/Cards/Card11/Normal.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ButtonRounded } from '../../Button';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const EditCard11 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Editable fields (same structure as Card 9)
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);

  const handleFlip = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsFlipped(prev => !prev);
  };

  const handleSave = () => {
    console.log("Save clicked", {
      title: editableTitle,
      description: editableDescription,
    });
  };

  return (
    <div className="col-start-6 col-end-11 row-start-8 row-end-13" style={{ width: '100%' }}>
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

            {/* Editable text */}
            <div style={{ minHeight: 0 }}>

              <input
                value={editableTitle}
                onChange={(e) => setEditableTitle(e.target.value)}
                className="card-title-lg whitespace-pre-line"
                style={{
                  color: 'var(--hot-purple)',
                  background: 'transparent',
                  width: '100%',
                  whiteSpace: 'pre-line',
                  scrollbarWidth: 'none',
                  resize: 'none',
                  outline: 'none',
                  marginBottom: '0'
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
                  scrollbarWidth: 'none',
                  resize: 'none',
                  outline: 'none',
                  height:'80%'
                }}
              />
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <button onClick={handleSave} style={{ cursor: "pointer" }}>
                <Image
                  src="/assets/Card11SaveEdit.svg"
                  alt="save"
                  width="22"
                  height="27"
                />
              </button>

              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image
                  src="/assets/Card11FlipEdit.svg"
                  alt="flip"
                  width="22"
                  height="27"
                />
              </button>
            </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonRounded />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="flip-back-edit card-bg"
          style={{
            backgroundColor: 'var(--skin-pink)',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          {/* Buttons top right */}
          <div className="absolute top-6 right-6" style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            <button onClick={handleSave} style={{ cursor: "pointer" }}>
              <Image
                src="/assets/Card11SaveEdit.svg"
                alt="save"
                width="22"
                height="27"
              />
            </button>

            <button onClick={handleFlip} style={{ cursor: "pointer" }}>
              <Image
                src="/assets/Card11FlipEdit.svg"
                alt="flip"
                width="22"
                height="27"
              />
            </button>
          </div>

          {/* Upload section */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyItems: 'center',
              gap: "24px"
            }}
          >
            <button
              onClick={() => document.getElementById("hiddenFileInput2")?.click()}
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

            <input type="file" id="hiddenFileInput2" style={{ display: "none" }} />

            <p
              className="card-description-md"
              style={{
                marginBottom: '24px',
                color: 'var(--hot-purple)',
                fontSize: 'clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)',
                lineHeight: "clamp(1.2rem, 1.5625vw - .5rem, 1.6rem)",
                textTransform: 'capitalize',
                textAlign: "center"
              }}
            >
              Browse here to start uploading<br />
              Supports PNG, JPG, JPEG, Video Max. xxx MB
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditCard11;
