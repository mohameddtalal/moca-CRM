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

const NormalCard5 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsFlipped(prev => !prev);
  };

  return (
    <div className="col-start-1 col-end-3 row-start-6 row-end-10" style={{ width: '100%' }}>
      <div
        onClick={handleFlip}
        className={`flip-wrapper ${color} card-bg`}
        style={{
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        cursor:"pointer"
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-sm whitespace-pre-line" style={{ color: 'var(--green)' }}>
              {title}
            </h2>

            <p className="card-description-sm mt-2 mb-2" style={{ color: 'var(--green)' }}>
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
             padding: "1rem"
          }}
        >
          <p
            className="card-description-sm"
            style={{
            marginBottom: '24px',
            color: 'var(--white)',
            textTransform :"capitalize",
            fontSize:'clamp(0.375rem, -0.25rem + 0.9766vw, 0.6875rem)',
            fontWeight:'600',
              
            }}
          >
            {description}
          </p>

          <div className="card-back-scroller overflow-y-scroll">
              <div style={{ display: "inline-flex", gap: "8px", flexWrap: "wrap" }}>
                <button className='card-button '
                                          style={{
                                            backgroundColor: 'var(--skin-pink)',
                                            color: 'var(--green)',
                                           
                                            
                                          }}
                                        >
                                          Announcements
                                        </button>
                            
                                        <button className='card-button '
                                          style={{
                                            backgroundColor: 'var(--green)',
                                            color: 'var(--skin-pink)',
                                             
                                          }}
                                        >
                                          Promocodes
                                        </button>
                                        <span className='card-button'
                                          style={{
                                            backgroundColor: '#F7f7f7',
                                            color: '#2c2c2c',
                                            borderRadius: '99999px',
                                            alignItems:"center",
                                            justifyContent:"center",
                                            justifyItems:"center",
                                            display:'flex'
                                           
                                            
                                          }}
                                        >
                                          <Image src='/assets/iconcard5.svg' alt='planet'  width ={16} height ={16}/>
                                        </span>
                                        <button className='card-button'
                                          style={{
                                            backgroundColor: 'var(--green)',
                                            color: 'var(--skin-pink)',
                                    
                                          }}
                                        >
                                          NPS
                                        </button>
                            
                                        <button className='card-button'
                                          style={{
                                            backgroundColor: 'var(--skin-pink)',
                                            color: 'var(--green)',
                                          
                                          }}
                                        >
                                          Communication
                                        </button>
                                        <span className='card-button'
                                          style={{
                                            backgroundColor: '#F7f7f7',
                                            color: '#2c2c2c',
                                            borderRadius: '99999px',
                                            alignItems:"center",
                                            justifyContent:"center",
                                             display:'flex'
                                        
                                          }}
                                        >
                                          <Image src='/assets/iconcard5.svg' alt='planet'  width ={16} height ={16}/>
                                        </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard5;