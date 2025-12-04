'use client';

import Image from 'next/image';

const LockedCard10 = () => {
  return (
    <div
      className="col-start-3 col-end-6 row-start-10 row-end-13  card-bg"
      style={{
        backgroundColor: 'var(--green)',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Image src="/assets/card10.svg" alt="locked" width={127} height={127} />
    </div>
  );
};

export default LockedCard10;
