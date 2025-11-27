// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard5 = () => {
  return (
   <div
             className="col-start-1 col-end-3 row-start-6 row-end-10 card-bg"
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
  );
};

export default LockedCard5;