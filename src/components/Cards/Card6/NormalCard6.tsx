// components/Cards/Card11/Normal.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ButtonRounded } from '../../Button';
import { ButtonSmall } from '@/components/Button_sm';
import { useCardEditor } from '@/components/hooks/useCardEditor';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const NormalCard6 = ({ title, description, color = '' }: Props) => {
   const router = useRouter();
    const {
     handleSelect,
     isFlipped,
     handleFlip,
      } = useCardEditor(title, description,"card6");

  return (
    <div className="col-start-3 col-end-6 row-start-6 row-end-10" style={{ width: '100%' }}>
      <div
        onClick={handleFlip}
        className={`flip-wrapper ${color} rounded-lg card-bg`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-md whitespace-pre-line" style={{ color: 'var(--yellow)' }}>
              {title}
            </h2>

            <p className="card-description-sm mt-2" style={{ color: 'var(--yellow)' }}>
              {description}
            </p>
          </div>

          <div className="self-end mt-auto">
            <ButtonSmall />
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
                              className='card-button btn'
                              style={{
                                backgroundColor: 'var(--purple)',
                                color: 'var(--yellow)',
                              }}
                            >
                              label
                            </button>
              
                            <button
                              className='card-button'
                              style={{
                                backgroundColor: 'var(--yellow)',
                                color: 'var(--purple)',
                              }}
                            >
                              label
                            </button>
              
                            <span
                              className='card-button'
                              style={{
                                backgroundColor: '#F7f7f7',
                                color: '#2c2c2c',
                                borderRadius: '99999px',
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex"
                              }}
                            >
                              <Image src='/assets/icon-card6.svg' alt='planet' width={16} height={16} />
                            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard6;