'use client'
import Image from 'next/image';
import { useState } from 'react';
import { ButtonSmall } from "../Button_sm";
import { wrap } from 'module';

interface Card6Props {
  title: string;
  description: string;
  color: string;
}

const Card6 = ({ title, description, color }: Card6Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`col-start-3 col-end-6 row-start-6 row-end-10`}
      style={{ width: '100%' }}
    >
      {isAuthorized ? (
        <div
          onClick={handleFlip}
          className={`flip-wrapper ${color} rounded-lg  card-bg`}
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* FRONT FACE */}
          <div className='flip-front'>
            <div style={{ minHeight: 0 }}>
              <h2 className="card-title-md whitespace-pre-line" style={{ color: "var(--yellow)" }}>
                {title}
              </h2>
              <p className="card-description-sm mt-2" style={{ color: "var(--yellow)" }}>
                {description}
              </p>
            </div>
            <div className="self-end mt-auto">
              <ButtonSmall />
            </div>
          </div>

          {/* BACK FACE */}
          <div
            className='flip-back card-bg '
            style={{
              backgroundColor: "var(--black)",
            }}
          >
           
              <p
                className="card-description-sm"
                style={{
                  marginBottom: "24px",
                  color: 'var(--white)'
                }}
              >
                {description}
              </p>
          <div className='card-back-scroller overflow-y-scroll '>
            {/* TAGS */}
            <div style={{ display: 'inline-flex', gap: '8px' , flexWrap:'wrap'}}>
              
              {/* 🔹 SPAN changed into BUTTON */}
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
        
      ) : (
        <div
          className=" rounded-lg"
          style={{
            width: '100%',
            height: '100%',
            borderRadius:'24px',
            backgroundColor: 'var(--purple)',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Image
            className='mt-auto'
            src="/assets/card6.svg"
            alt="sea"
            width={82}
            height={217}
          />
        </div>
      )}
    </div>
  );
};

export default Card6;
