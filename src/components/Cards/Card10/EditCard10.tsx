// components/Cards/Card10/Normal.tsx
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

const EditCard10 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Editable fields (same as Card 9)
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
    <div className="col-start-3 col-end-6 row-start-10 row-end-13" style={{ width: '100%' }}>
      <div
        className={`flip-wrapper ${color} card-bg rounded-lg`}
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
                className="card-title-sm whitespace-pre-line"
                style={{
                  color: 'var(--yellow)',
                  background: 'transparent',
                  width: '100%',
                  whiteSpace: 'pre-line',
                  scrollbarWidth: 'none',
                  resize: 'none',
                  outline: 'none',
                  marginBottom: 0
                }}
              />

              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                className="card-description-sm mt-2"
                style={{
                  color: 'var(--yellow)',
                  background: 'transparent',
                  width: '100%',
                  scrollbarWidth: 'none',
                  resize: 'none',
                  outline: 'none',
                  height: '80%'
                }}
              />
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              <button onClick={handleSave} style={{ cursor: "pointer" }}>
                <Image
                  src="/assets/Card10SaveEdit.svg"
                  alt="save"
                  width={20}
                  height={20}
                />
              </button>

              <button onClick={handleFlip} style={{ cursor: "pointer" }}>
                <Image
                  src="/assets/Card10FlipEdit.svg"
                  alt="flip"
                  width={20}
                  height={20}
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
            backgroundColor: 'var(--green)',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          {/* Buttons top right */}
          <div className="absolute top-6 right-6" style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>

            <button onClick={handleSave} style={{ cursor: "pointer" }}>
              <Image
                src="/assets/Card10SaveEdit.svg"
                alt="save"
                width={17}
                height={12}
              />
            </button>

            <button onClick={handleFlip} style={{ cursor: "pointer" }}>
              <Image
                src="/assets/Card10FlipEdit.svg"
                alt="flip"
                width={17}
                height={12}
              />
            </button>

          </div>

          {/* Upload section (unchanged) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: "8px"
            }}
          >
            <button
              onClick={() => document.getElementById("hiddenFileInputCard10")?.click()}
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
                cursor: "pointer"
              }}
            >
              Upload
            </button>

            <input type="file" id="hiddenFileInputCard10" style={{ display: "none" }} />

            <p
              className="card-description-sm"
              style={{
                color: 'var(--yellow)',
                fontSize: 'clamp(0.5rem, 1vw + 0.2rem, 0.8rem)',
                lineHeight: 'clamp(0.6rem, 1vw + 0.2rem, 1rem)',
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

export default EditCard10;
