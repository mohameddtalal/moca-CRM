// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard5 = () => {
  return (
   <div
             className="col-start-1 col-end-3 row-start-6 row-end-10 card-bg"
             style={{
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
               width={162}
               height={162}
             />
           </div>
  );
};

export default LockedCard5;