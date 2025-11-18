import Image from "next/image";

interface Card1Props {
  title: string;
  description: string;
  color: string;
}

const Card1 = ({ title, description, color }: Card1Props) => {
  return (
    <div className="relative col-start-1 col-end-6 row-start-1 row-end-6 ">

      {/* PROFILE PHOTO */}
      <div className="absolute rounded-full overflow-hidden z-20 ">
        <img
          src="assets/profile-photo.svg"
          alt="Profile"
          className="w-[56px] h-[56px] object-cover"
        />
      </div>

      {/* MAIN CARD */}
      <div
        className={`${color} card-bg w-full h-full flex flex-col p-6`}
        style={{ clipPath: "url(#cutout-rounded-px)" }}
      >
        <div className="flex flex-col flex-1 justify-between min-h-0">

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col">
            <h2
              className="card-title-lg whitespace-pre-line"
              style={{ color: "var(--hot-purple)", marginLeft: "clamp(56px, 8vw, 88px)" }}
            >
              {title}
            </h2>

            <p
              className="card-description-lg "
              style={{ color: "var(--hot-purple)" }}
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
                height: "clamp(24px, 5vw, 44px)",
              }}
            >
              <Image
                src="/assets/arrow_forward.svg"
                alt="Arrow"
                width={24}
                height={24}
                style={{
                  width: "clamp(10px, 3vw, 18px)",
                  height: "clamp(10px, 3vw, 18px)",
                }}
              />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Card1;
