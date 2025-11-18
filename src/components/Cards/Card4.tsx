import Image from "next/image";

interface Card4Props {
  title: string;
  description: string;
  color: string;
}

const Card4 = ({ title, description, color }: Card4Props) => {
  return (
    <div
      className={`col-start-11 col-end-13 row-start-1 row-end-6 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}
    >
      {/* Flex column to keep arrow at bottom */}
      <div className="flex flex-col flex-1 justify-between min-h-0">

        {/* TITLE + DESCRIPTION */}
        <div>
          <h2 className="card-title-md whitespace-pre-line" style={{ color: "var(--purple)" }}>
            {title}
          </h2>

          <p className="card-description-md mt-2" style={{ color: "var(--purple)" }}>
            {description}
          </p>
        </div>

        {/* ARROW BUTTON */}
        <div className="self-start">
          <button
            className="bg-black w-10 h-10 rounded-full flex items-center justify-center"
          >
            <Image
              src="/assets/arrow_forward.svg"
              alt="Arrow"
              width={16}
              height={16}
            />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card4;
