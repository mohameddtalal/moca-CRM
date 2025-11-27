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

const NormalCard2 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsFlipped(prev => !prev);
  };

  return (
    <div className="col-start-6 col-end-8 row-start-1 row-end-6" style={{ width: '100%' }}>
      <div
        // onClick={handleFlip}
        className={`flip-wrapper ${color} rounded-lg card-bg`}
        style={{
        //   transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        cursor:"default"
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-md whitespace-pre-line" style={{ color: 'var(--skin-pink)' }}>
              {title}
            </h2>

            <p className="card-description-sm mt-2" style={{ color: 'var(--skin-pink)' }}>
              {description}
            </p>
          </div>

          <div className="self-end mt-auto">
            <ButtonRounded />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="flip-back card-back-shadow"
          style={{
            backgroundColor: 'var(--black)',
          }}
        >
          <p
            className="card-description-sm"
            style={{
              marginBottom: '24px',
              color: 'var(--white)',
              
            }}
          >
            {description}
          </p>

          <div className="card-back-scroller overflow-y-scroll">
            <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                                className="card-button btn"
                                style={{ backgroundColor: "var(--skin-pink)", color: "var(--black)" }}
                              >
                                Label
                              </button>
              
                              <button
                                className="card-button"
                                style={{ backgroundColor: "var(--black)", color: "var(--skin-pink)" }}
                              >
                                Label
                              </button>
              
                              <span
                                className="card-button"
                                style={{
                                  backgroundColor: "#F7f7f7",
                                  color: "#2c2c2c",
                                  borderRadius: "99999px",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  display: "flex",
                                }}
                              >
                                <Image src="/assets/icon-card2.svg" alt="icon" width={16} height={16} />
                              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard2;