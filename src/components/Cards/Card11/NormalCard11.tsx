// components/Cards/Card11/Normal.tsx
'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useState } from 'react';
import { ButtonRounded } from '../../Button';
import { useNav } from "@/components/Context/Navcontext";

interface Props {
  title: string;
  description: string;
  color?: string;
}

const NormalCard11 = ({ title, description, color = '' }: Props) => {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
   const { setSelectedTitle, setSelectedButton } = useNav();
  const handleFlip = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsFlipped(prev => !prev);

  };
  const handleSelect = (buttonName: string) => {
    setSelectedTitle(title);           
    setSelectedButton(buttonName);      
  };
  return (
    <div className="col-start-6 col-end-11 row-start-8 row-end-13" style={{ width: '100%' }}>
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
            <h2 className="card-title-lg whitespace-pre-line" style={{ color: 'var(--purple)' }}>
              {title}
            </h2>

            <p className="card-description-lg mt-2 mb-2" style={{ color: 'var(--purple)' }}>
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
            className="card-description-lg"
            style={{
              marginBottom: '24px',
              color: 'var(--white)',
              fontSize: 'clamp(0.5rem, -0.5rem + 1.5625vw, 1rem)',
              textTransform: 'capitalize',
            }}
          >
            Configure & personalize modules settings for optimal space management.
          </p>

          <div className="card-back-scroller overflow-y-scroll" style={{ maxHeight: '50%' }}>
            <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap' ,cursor:'default'}}>
              <button
               onClick={() => {
                    handleSelect("Design Settings");   // 1️⃣ store title in context
                    router.push("/dashboard-edit");    // 2️⃣ navigate to new page
                  }}
                className="card-button "
                style={{ backgroundColor: 'var(--skin-pink)', color: 'var(--hot-purple)', cursor:'pointer'}}
              >
                Design Settings
              </button>

              <button className="card-button" style={{ backgroundColor: 'var(--hot-purple)', color: 'var(--skin-pink)' }}>
                Permissions
              </button>

              <span
                className="card-button"
                style={{
                  backgroundColor: '#F7f7f7',
                  color: '#2c2c2c',
                  borderRadius: '99999px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <Image src="/assets/icon-card11.svg" alt="planet" width={16} height={16} />
              </span>

              <button className="card-button btn" style={{ backgroundColor: 'var(--skin-pink)', color: 'var(--hot-purple)' }}>
                Property Management
              </button>

              <button className="card-button" style={{ backgroundColor: 'var(--hot-purple)', color: 'var(--skin-pink)' }}>
                Dynamic Lists
              </button>

              <span
                className="card-button"
                style={{
                  backgroundColor: '#F7f7f7',
                  color: '#2c2c2c',
                  borderRadius: '99999px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <Image src="/assets/star.svg" alt="star" width={16} height={16} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard11;