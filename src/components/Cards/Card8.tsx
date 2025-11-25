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
        className={`flip-wrapper ${color} rounded-lg p-6 card-bg`}
        style={{transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}}
      >
        {/* FRONT FACE */}
        <div className='flip-front'
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
        <div className='flip-back'
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
