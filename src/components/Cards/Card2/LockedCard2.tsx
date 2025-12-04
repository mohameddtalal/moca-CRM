// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard2 = () => {
  return (
    <div
      className="card-bg col-start-6 col-end-8 row-start-1 row-end-6"
      
      style={{
        backgroundColor: "var(--green)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      
      <Image
      
        src="/assets/card2.svg"
        alt="locked"
        width={178}
        height={206}
      />
    </div>
  );
};

export default LockedCard2;