'use client'

import { useState } from 'react';
import { ButtonSmall } from "../Button_sm";
import Image from 'next/image';

interface Card5Props {
  title: string;
  description: string;
  color: string;
}

const Card5 = ({ title, description, color }: Card5Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true);   // ← NEW like Card6

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="col-start-1 col-end-3 row-start-6 row-end-10"
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
            <div>
              <h2 className="card-title-sm whitespace-pre-line" style={{ color: 'var(--green)' }}>
                {title}
              </h2>
              <p className="card-description-sm mt-2 mb-2" style={{ color: 'var(--green)' }}>
                {description}
              </p>
            </div>
            <div className="self-end mt-auto">
              <ButtonSmall />
            </div>
          </div>

          {/* BACK FACE */}
         
          <div className='flip-back card-back-shadow ' style={{backgroundColor:'var(--black)'}} >
            <p className="card-description-sm " style={{ color: 'var(--white)' ,
              textTransform :"capitalize",
              fontSize:'clamp(0.375rem, -0.25rem + 0.9766vw, 0.6875rem)',
              fontWeight:'600',
            }}>
           {description}
            </p>
          <div className='card-back-scroller overflow-y-scroll '>
            <div style={{ display: 'inline-flex ', gap: '8px',flexWrap:'wrap' }}>
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
      ) : (
        // ❌ NOT AUTHORIZED VIEW (same pattern as Card6)
        <div
          className="card-bg rounded-lg"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--skin-pink)',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/assets/card5.svg"
            alt="locked"
            width={150}
            height={150}
          />
        </div>
      )}
    </div>
  );
};

export default Card5;
