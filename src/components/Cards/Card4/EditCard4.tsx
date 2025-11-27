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

const EditCard4 = ({ title, description, color = '' }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsFlipped(prev => !prev);
  };

  return (
    <div className="col-start-11 col-end-13 row-start-1 row-end-6" style={{ width: '100%' }}>
      <div
        className={`flip-wrapper ${color}  card-bg`}
        style={{
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        cursor:"default"
        }}
      >
        {/* FRONT FACE */}
        <div className="flip-front">
            <div style={{display:'flex' ,flexDirection:'row'}}>
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-md whitespace-pre-line" style={{ color: 'var(--hot-purple)' }}>
              {title}
            </h2>

            <p className="card-description-sm mt-2" style={{ color: 'var(--hot-purple)' }}>
              {description}
            </p>
          </div>
          <div style={{display:'flex' , flexDirection:'column' , gap:'9px'}}>
            <button onClick={() => console.log("Save clicked")} style={{cursor:"pointer"}}>
                <Image 
                    src="/assets/Card4SaveEdit.svg" 
                    alt="save" 
                    width="50" 
                    height="50" 
                />
                </button>

                <button onClick={handleFlip} style={{cursor:"pointer"}} >
                <Image 
                    src="/assets/Card4FlipEdit.svg" 
                    alt="flip" 
                    width="50" 
                    height="50"
                />
                </button>

          </div>
          </div>

          <div className="self-end mt-auto">
            <ButtonRounded />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="flip-back-edit card-bg"
          style={{
            backgroundColor: 'var(--energy-green)',
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
            <div className=" absolute top-6 right-6 " style={{display:'flex' , flexDirection:'column' , gap:'9px' }}>
            <button onClick={() => console.log("Save clicked")} style={{cursor:"pointer"}}>
                <Image 
                    src="/assets/Card4SaveEdit.svg" 
                    alt="save" 
                    width="16" 
                    height="21" 
                />
                </button>

                <button onClick={handleFlip} style={{cursor:"pointer"}} >
                <Image 
                    src="/assets/Card4FlipEdit.svg" 
                    alt="flip" 
                    width="16" 
                    height="21"
                />
                </button>

          </div>
          <div style={{display:'flex' ,justifyContent:'center', flexDirection:'column', alignItems:'center' , textAlign:'center' , justifyItems:'center',gap:"20px" }}>
            <button
                onClick={() => document.getElementById("fileInputYellow")?.click()}
                style={{
                color: "var(--hot-purple)",
                backgroundColor: "transparent",
                border: "1px solid var(--hot-purple)",
                width: "78px",
                height: "32px",
                borderRadius: "1536px",
                fontSize: "clamp(0.5rem, 1vw + 0.2rem, 0.8rem)",
                fontFamily: "GT Walsheim",
                fontWeight: "400",
                cursor: "pointer",
                }}
            >
                Upload
            </button>

  <input type="file" id="fileInputYellow" style={{ display: "none" }} />
          <p
            className="card-description-sm"
            style={{
             
              color: 'var(--hot-purple)',
              
              textTransform: 'capitalize',
              textAlign:"center"
            }}
          >
            Browse  here to start uploading
            Supports PNG, JPG,JPEG, Video Max. xxx MB 
          </p>
        </div>
    </div>
      </div>
    </div>
  );
};

export default EditCard4;