import Image from "next/image";

interface Card10Props {
  title: string;
  description: string;
  color: string;
}

const Card10 = ({ title, description, color }: Card10Props) => {
  return (
    <div
      className={`col-start-3 col-end-6 row-start-10 row-end-13 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}
    >
      {/* Flex column to keep arrow at bottom */}
      <div className="flex flex-col flex-1 justify-between min-h-0">

        {/* TITLE + DESCRIPTION */}
        <div>
          <h2 className="card-title-sm whitespace-pre-line" style={{ color: "var(--yellow)" }}>
            {title}
          </h2>

          <p className="card-description-sm mt-2 mb-2" style={{ color: "var(--yellow)" }}>
            {description}
          </p>
        </div>

        {/* ARROW BUTTON */}
        <div className="self-start">
          <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
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

export default Card10;
