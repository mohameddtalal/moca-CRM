'use client';

import Image from 'next/image';

const LockedCard9 = () => {
  return (
    <div
      className="col-start-1 col-end-3 row-start-10 row-end-13  card-bg"
      style={{
        backgroundColor: 'var(--energy-green)',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Image  
      
      src="/assets/card9.svg"
            alt="locked"
            width={149}
            height={149} />
    </div>
  );
};

export default LockedCard9;
