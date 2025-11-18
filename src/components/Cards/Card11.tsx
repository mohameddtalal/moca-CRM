import Image from "next/image";

interface Card11Props {
  title: string;
  description: string;
  color: string;
}

const Card11 = ({ title, description, color }: Card11Props) => {
  return (
    <div
      className={`col-start-6 col-end-11 row-start-8 row-end-13 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}
    >
      {/* Flex column to keep arrow at bottom */}
      <div className="flex flex-col flex-1 justify-between min-h-0">

        {/* TITLE + DESCRIPTION */}
        <div>
          <h2 className="card-title-lg whitespace-pre-line" style={{ color: "var(--purple)" }}>
            {title}
          </h2>

          <p className="card-description-lg mt-2 mb-2" style={{ color: "var(--purple)" }}>
            {description}
          </p>
        </div>

        {/* ARROW BUTTON */}
        <div className="self-start ">
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
  );
};

export default Card11;
