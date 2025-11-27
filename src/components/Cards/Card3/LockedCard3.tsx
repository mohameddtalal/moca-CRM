// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard3 = () => {
  return (
    <div
              className="col-start-8 col-end-11 row-start-1 row-end-8 card-bg"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "var(--purple)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                className="card-title-md"
                style={{ color: "var(--peach)", marginBottom: "24px" ,textAlign:"center"}}
              >
                LEAD the Change. <br/>BE the Future.
              </p>
              <Image
                className='mt-auto'
                src="/assets/card3.svg"
                alt="locked"
                width={291}
                height={219}
              />
            </div>
  );
};

export default LockedCard3;