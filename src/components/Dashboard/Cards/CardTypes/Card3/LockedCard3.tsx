// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard3 = () => {
  return (
    <div
              className="col-start-8 col-end-11 row-start-1 row-end-8 card-bg"
              style={{
                backgroundColor: "var(--purple)",  //color
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                className='mt-auto'
                src="/assets/card3.svg"
                alt="locked"
                width={299}
                height={362}
              />
            </div>
  );
};

export default LockedCard3;