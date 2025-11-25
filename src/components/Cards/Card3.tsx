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
        className={`flip-wrapper ${color} rounded-lg p-6 card-bg`}
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      
      >
        {/* FRONT FACE */}
        <div
          className='flip-front'
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
         className='flip-back '
        >
          <h2 className="card-title-lg" style={{ color: "var(--black)" }}>
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
