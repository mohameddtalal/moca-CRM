import Image from "next/image";

interface Card1Props {
  title: string;
  description: string;
  color: string;
}

const Card1 = ({ title, description, color }: Card1Props) => {
  return (
    <div className="relative col-start-1 col-end-6 row-start-1 row-end-6">

      {/* PHOTO — unchanged exactly as you had it */}
      <div className="absolute rounded-full overflow-hidden z-20">
        <img
          src="assets/profile-photo.svg"
          alt="Profile"
          className="w-[56px] h-[56px] object-cover"
        />
      </div>

      {/* MAIN CARD */}
      <div
        className={`${color} card-bg w-full h-full flex flex-col`}
        style={{ clipPath: "url(#cutout-rounded-px)" }}
      >
        <div className="p-6 flex-1 flex flex-col min-h-0">

          {/* CONTENT GRID (prevents overflow & keeps arrow inside) */}
          <div className="grid grid-cols-1 min-h-0 overflow-visible">

            <h2
              className="card-title-lg"
              style={{ color: "var(--hot-purple)", paddingLeft: "88px" }}
            >
              {title}
            </h2>

            <p
              className="card-description-lg mt-3"
              style={{ color: "var(--hot-purple)" }}
            >
              {description}
            </p>

            {/* ARROW BUTTON — stays inside card */}
            <div className="place-self-start mt-4">
              <button className="bg-black w-14 h-14 rounded-full flex items-center justify-center">
                <Image
                  src="/assets/arrow_forward.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                />
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Card1;
