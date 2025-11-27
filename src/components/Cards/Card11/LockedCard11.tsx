// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard11 = () => {
  return (
    <div
      className="col-start-6 col-end-11 row-start-8 row-end-13 rounded-lg"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '24px',
        backgroundColor: 'var(--skin-pink)',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Image
        className="mt-auto"
        style={{ borderRadius: 'clamp(0px, 24px + (1240px - 100vw), 24px)' }}
        src="/assets/card11.svg"
        alt="locked"
        width={472}
        height={250}
      />
    </div>
  );
};

export default LockedCard11;