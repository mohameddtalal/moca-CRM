// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard6 = () => {
  return (
    <div
      className="col-start-3 col-end-6 row-start-6 row-end-10 rounded-lg"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '24px',
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
  );
};

export default LockedCard6;