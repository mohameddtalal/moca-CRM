// components/Cards/Card11/Normal.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ButtonRounded } from '../../buttons-arrow/Button';
import { ButtonSmall } from '@/components/buttons-arrow/Button_sm';
import { useRouter } from 'next/navigation';
import { useCardEditor } from '@/components/hooks/useCardEditor';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const NormalCard4 = ({ title, description, color = '' }: Props) => {
 const router = useRouter();
  const {
   handleSelect,
   isFlipped,
   handleFlip,
    } = useCardEditor(title, description,"card4");
  

  return (
    <div className="col-start-11 col-end-13 row-start-1 row-end-6" style={{ width: '100%' }}>
      <div
        // onClick={handleFlip}
        className={`flip-wrapper ${color} card-bg`}
        style={{
        //   transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        cursor:"default"
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-md whitespace-pre-line" style={{ color: 'var(--purple)' }}>
              {title}
            </h2>

            <p className="card-description-sm mt-2" style={{ color: 'var(--purple)' }}>
              {description}
            </p>
          </div>

          <div className="self-end mt-auto">
            <ButtonSmall/>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="flip-back card-back-shadow"
          style={{
            backgroundColor: 'var(--black)',
             padding: "1rem"
          }}
        >
          <p
            className="card-description-sm"
            style={{
            marginBottom: '24px',
            color: 'var(--white)',
            fontSize:'clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)',
            textTransform:'capitalize'
              
            }}
          >
            {description}
          </p>

          <div className="card-back-scroller overflow-y-scroll">
              <div style={{ display: "inline-flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  className="card-button btn"
                  style={{ backgroundColor: "var(--purple)", color: "var(--white)" }}
                >
                  Label
                </button>

                <button
                  className="card-button"
                  style={{ backgroundColor: "var(--white)", color: "var(--purple)" }}
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
                <Image src="/assets/icon-card4.svg" alt="icon" width={16} height={16} />
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard4;