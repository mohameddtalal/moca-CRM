'use client'

import { useState } from 'react';
import { ButtonRounded } from "../Button";

interface Card3Props {
  title: string;
  description: string;
  color: string;
}

const Card3 = ({ title, description, color }: Card3Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`col-start-8 col-end-11 row-start-1 row-end-8`}
      style={{ width: '100%' }}
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
            backfaceVisibility: 'hidden',
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-lg whitespace-pre-line" style={{ color: "var(--peach)" }}>
              {title}
            </h2>
            <p className="card-description-lg mt-2 mb-2" style={{ color: "var(--peach)" }}>
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
          <h2 className="card-title-lg" style={{ color: "var(--peach)" }}>
            Back Content
          </h2>
          <p className="card-description-lg mt-2" style={{ color: "var(--peach)" }}>
            Add your back content here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
