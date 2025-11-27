// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard8 = () => {
  return (
    <div
             className="col-start-11 col-end-13 row-start-6 row-end-13 card-bg"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "var(--yellow)",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
               <p
                  className="card-title-lg"
                  style={{
                    marginBottom: "24px",
                    color: "var(--black)",
                   
                  }}
                >
               Lead the Change. Be the Future.
                </p>
              <Image
                className="mt-auto"
                src="/assets/card8.svg"
                alt="sea"
                width={120}
                height={188}
              />
            </div>
  );
};

export default LockedCard8;