// components/Cards/Card11/Locked.tsx
'use client';

import Image from 'next/image';

const LockedCard11 = () => {
  return (
    <div
      className="relative col-start-1 col-end-6 row-start-1 row-end-6"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
        <div className="absolute top-0 left-0 rounded-full overflow-hidden z-30">
        <img
          src="assets/profile-photo.svg"
          alt="Profile"
          className="w-[56px] h-[56px] object-cover"
        />
      </div>
            <div
            
            style={{
               clipPath: "url(#cutout-rounded-px)",
              WebkitClipPath: "url(#cutout-rounded-px)",
              padding: 'clamp(0.8rem, 0.5rem + 2vw, 2.5rem) clamp(0.8rem, 0.5rem + 2vw, 1rem) clamp(0.1875rem, -0.0625rem + 0.3906vw, 0.3125rem) clamp(0.8rem, 0.5rem + 2vw, 1rem)',
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
               borderRadius: '24px',
              flexGrow: 1,
              minHeight: 0,
              overflow: "hidden",
              width: "100%",
              height: "100%",
              backgroundColor: "var(--yellow)",
              alignItems: "center",

         
            }}
          >
        
            <p
              className="card-title-lg"
              style={{ color: "var(--hot-purple)", marginBottom: "24px" }}
            >
              Moca – My Office & Coffee Assistant
            </p>
            <Image
            className="mt-auto"
              src="/assets/card1.svg"
              alt="locked"
              width={152}
              height={272}
            />
          </div>
          </div>
  );
};

export default LockedCard11;