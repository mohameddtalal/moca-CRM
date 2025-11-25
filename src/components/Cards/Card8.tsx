'use client'

import { useState } from 'react';
import { ButtonRounded } from "../Button";

interface Card8Props {
  title: string;
  description: string;
  color: string;
}

const Card8 = ({ title, description, color }: Card8Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`col-start-11 col-end-13 row-start-6 row-end-13`}
      style={{  width: '100%' }}
    >
      <div
        onClick={handleFlip}
        className={`${color} rounded-lg p-6 card-bg`}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT FACE */}
        <div
          style={{
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-lg whitespace-pre-line" style={{ color: "var(--black)" }}>
              {title}
            </h2>
            <p className="card-description-lg mt-2" style={{ color: "var(--black)" }}>
              {description}
            </p>
          </div>
          <div className="self-end mt-auto">
            <ButtonRounded />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2 className="card-title-lg" style={{ color: "var(--black)" }}>
            Back Content
          </h2>
          <p className="card-description-lg mt-2" style={{ color: "var(--black)" }}>
            Add your back content here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card8;
