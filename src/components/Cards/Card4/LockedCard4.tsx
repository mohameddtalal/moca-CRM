// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard4 = () => {
  return (
   <div
             className="card-bg col-start-11 col-end-13 row-start-1 row-end-6"
             style={{
               backgroundColor: "var(--energy-green)",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
             }}
           >
            
             <Image
               src="/assets/card4.svg"
               alt="locked"
               width={140}
               height={212}
             />
           </div>
  );
};

export default LockedCard4;