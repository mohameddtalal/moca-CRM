import Image from "next/image";

interface Card1Props {
  title: string;
  description: string;
  color: string;
}

const Card1 = ({ title, description, color }: Card1Props) => {
  return (
    <div
      className={`relative col-start-1 col-end-6 row-start-1 row-end-6`}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",   // stretch like Card2
        minHeight: 0
      }}
    >

      {/* PROFILE PHOTO */}
      <div className="absolute top-0 left-0 rounded-full overflow-hidden z-30">
        <img
          src="assets/profile-photo.svg"
          alt="Profile"
          className="w-[56px] h-[56px] object-cover"
        />
      </div>

      {/* background layer with clip-path */}
      <div
        className={`${color} card-bg p-4 relative`}
        style={{
          clipPath: "url(#cutout-rounded-px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          minHeight: 0,
          overflow: "hidden"
        }}
      >

        {/* TITLE + DESCRIPTION */}
        <div style={{ minHeight: 0 }}>
          <h2
            className="card-title-lg whitespace-pre-line"
            style={{ color: "var(--hot-purple)", paddingLeft: "clamp(56px, 8vw, 88px)" }}
          >
            {title}
          </h2>
     
          <p
            className="card-description-lg"
            style={{ color: "var(--hot-purple)", paddingTop:'clamp(0.9375rem, 7.125rem + -6.4453vw, 3rem)'}}
          >
            {description}
          </p>

        </div>

        {/* ARROW BUTTON */}
        <div className="self-start">
          <button
            className="bg-black rounded-full flex items-center justify-center"
            style={{
              width: "clamp(24px, 5vw, 44px)",
              height: "clamp(24px, 5vw, 44px)"
            }}
          >
            <Image
              src="/assets/arrow_forward.svg"
              alt="Arrow"
              width={24}
              height={24}
              style={{
                width: "clamp(10px, 3vw, 18px)",
                height: "clamp(10px, 3vw, 18px)"
              }}
            />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Card1;
