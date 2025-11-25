'use client'

import { useState } from 'react';
import { ButtonSmall } from "../Button_sm";

interface Card10Props {
  title: string;
  description: string;
  color: string;
}

const Card10 = ({ title, description, color }: Card10Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`col-start-3 col-end-6 row-start-10 row-end-13`}
      style={{ width: '100%' }}
    >
      <div
        onClick={handleFlip}
        className={`flip-wrapper ${color} rounded-lg p-6 card-bg`}
        style={{transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}}
      >
        {/* FRONT FACE */}
        <div className='flip-front'
        >
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-sm whitespace-pre-line" style={{ color: "var(--yellow)" }}>
              {title}
            </h2>
            <p className="card-description-sm" style={{ color: "var(--yellow)" }}>
              {description}
            </p>
          </div>
          <div className="self-end mt-auto">
            <ButtonSmall />
          </div>
        </div>

        {/* BACK FACE */}
        <div className='flip-back'
        >
          <h2 className="card-title-sm" style={{ color: "var(--yellow)" }}>
            Back Content
          </h2>
          <p className="card-description-sm mt-2" style={{ color: "var(--yellow)" }}>
            Add your back content here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card10;
