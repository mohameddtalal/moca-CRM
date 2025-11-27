// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard2 = () => {
  return (
    <div
      className="card-bg col-start-6 col-end-8 row-start-1 row-end-6"
      
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--green)",
        display: "flex",
        flexDirection: "column",
        gap:'40px',
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <div style={{ 
        textAlign: "center", 
      }}>
        <span
          className="card-title-sm"
          style={{ color: "var(--skin-pink)" }}
        >
          Behind{" "}
        </span>
        <span
          className="card-title-md"
          style={{ color: "var(--skin-pink)" }}
        >
          Every Productive{" "} <br/>
        </span>
        <span
          className="card-title-md"
          style={{ color: "var(--skin-pink)" }}
        >
          Day{" "}
        </span>
        <span
          className="card-title-sm"
          style={{ color: "var(--skin-pink)" }}
        >
          Is{" "}
        </span>
        <span
          className="card-title-md"
          style={{ color: "var(--skin-pink)" }}
        >
          A{" "} <br/>
        </span>
        <span
          className="card-title-md"
          style={{ color: "var(--skin-pink)" }}
        >
          Great{" "}
        </span>
        <span
          className="card-title-md"
          style={{ color: "var(--skin-pink)" }}
        >
          Team
        </span>
      </div>
      
    
      
      <Image
      
        src="/assets/card2.svg"
        alt="locked"
        width={110}
        height={54}
      />
    </div>
  );
};

export default LockedCard2;