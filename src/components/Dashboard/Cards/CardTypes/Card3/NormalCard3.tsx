// components/Cards/Card11/Normal.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ButtonRounded } from '../../buttons-arrow/Button';
import { useRouter } from 'next/navigation';
import { useCardEditor } from '@/components/hooks/useCardEditor';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const NormalCard3 = ({ title, description, color = '' }: Props) => {
 const router = useRouter();
  const {
   handleSelect,
   isFlipped,
   handleFlip,
    } = useCardEditor(title, description,"card3");
  

  return (
    <div className="col-start-8 col-end-11 row-start-1 row-end-8" style={{ width: '100%' }}>
      <div
        onClick={handleFlip}
        className={`flip-wrapper ${color} card-bg`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-lg whitespace-pre-line" style={{ color: 'var(--peach)' }}>
              {title}
            </h2>

            <p className="card-description-lg mt-2 mb-2" style={{ color: 'var(--peach)' }}>
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
            padding: "1rem",
          }}
        >
          <p
              className="card-description-lg"
              style={{
                marginBottom: "24px",
                color: "var(--white)",
                fontSize: 'clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)',
                textTransform: 'capitalize',
              }}
            >
              {description}
            </p>

          <div className="card-back-scroller overflow-y-scroll">
            <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                                className="card-button"
                                style={{
                                  backgroundColor: "var(--hot-purple)",
                                  color: "var(--peach)",
                                }}
                              >
                                Assets Management
                              </button>
              
                              <button
                                className="card-button"
                                style={{
                                  backgroundColor: "var(--peach)",
                                  color: "var(--purple)",
                                }}
                              >
                                Report a Bug
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
                                <Image
                                  src="/assets/icon-card3.svg"
                                  alt="icon"
                                  width={16}
                                  height={16}
                                />
                              </span>
                              <button
                                className="card-button btn"
                                style={{
                                  backgroundColor: "var(--hot-purple)",
                                  color: "var(--peach)",
                                }}
                              >
                                Lorem
                              </button>
              
                              <button
                                className="card-button"
                                style={{
                                  backgroundColor: "var(--peach)",
                                  color: "var(--purple)",
                                }}
                              >
                                Ipsum
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
                                <Image
                                  src="/assets/icon-card3.svg"
                                  alt="icon"
                                  width={16}
                                  height={16}
                                />
                              </span>
                              <button
                                className="card-button"
                                style={{
                                  backgroundColor: "var(--hot-purple)",
                                  color: "var(--peach)",
                                }}
                              >
                                Lorem Ipsum
                              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard3;