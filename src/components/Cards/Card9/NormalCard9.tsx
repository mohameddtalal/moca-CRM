'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ButtonSmall } from '../../Button_sm';
import { useCardEditor } from '@/components/hooks/useCardEditor';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  description: string;
  color?: string;
}

const NormalCard9 = ({ title, description, color = '' }: Props) => {
 const router = useRouter();
  const {
   handleSelect,
   isFlipped,
   handleFlip,
    } = useCardEditor(title, description,"card9");
  

  return (
    <div className="col-start-1 col-end-3 row-start-10 row-end-13" style={{ width: '100%' }}>
      <div
        onClick={handleFlip}
        className={`flip-wrapper ${color} rounded-lg card-bg`}
        style={{
        //   transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', un comment to flip
        cursor:'default'
        }}
      >
        {/* FRONT */}
        <div className="flip-front">
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-sm whitespace-pre-line" style={{ color: "var(--black)" }}>
              {title}
            </h2>

            <p className="card-description-sm mt-2" style={{ color: "var(--black)" }}>
              {description}
            </p>
          </div>

          <div className="self-end mt-auto">
            <ButtonSmall />
          </div>
        </div>

        {/* BACK */}
        <div className="flip-back card-back-shadow" style={{ backgroundColor: "var(--black)" }}>
          <p
            className="card-description-sm"
            style={{
              color: "var(--white)",
            }}
          >
            {description}
          </p>

          <div className="card-back-scroller overflow-y-scroll">
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '8px' }}>
              <button className="card-button" style={{ backgroundColor: 'var(--green)', color: 'var(--yellow)' }}>
                Manage Access Control
              </button>

              <button className="card-button" style={{ backgroundColor: 'var(--yellow)', color: 'var(--green)' }}>
                Access Logs
              </button>

              <span
                className="card-button"
                style={{
                  backgroundColor: '#F7f7f7',
                  color: '#2c2c2c',
                  borderRadius: '99999px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src="/assets/icon-card9.svg" alt="hand" width={16} height={16} />
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NormalCard9;
