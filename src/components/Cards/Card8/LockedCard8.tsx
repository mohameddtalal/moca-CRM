// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard8 = () => {
  return (
    <div
             className="col-start-11 col-end-13 row-start-6 row-end-13 card-bg"
              style={{
                backgroundColor: "var(--yellow)",
              }}
            >
              <Image
                src="/assets/card8.svg"
                alt="sea"
                width={178}
                height={361}
              />
            </div>
  );
};

export default LockedCard8;