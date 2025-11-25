'use client'

import { useState } from 'react';
import { ButtonSmall } from "../Button_sm";

interface Card5Props {
  title: string;
  description: string;
  color: string;
}

const Card5 = ({ title, description, color }: Card5Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="col-start-1 col-end-3 row-start-6 row-end-10"
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
          <div>
            <h2 className="card-title-sm whitespace-pre-line" style={{ color: 'var(--green)' }}>
              {title}
            </h2>
            <p className="card-description-sm mt-2 mb-2" style={{ color: 'var(--green)' }}>
              {description}
            </p>
          </div>
          <div className="self-end mt-auto">
            <ButtonSmall />
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
          <h2 className="card-title-sm" style={{ color: 'var(--green)' }}>
            Back Content
          </h2>
          <p className="card-description-sm mt-2" style={{ color: 'var(--green)' }}>
            Add your back content here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card5;
