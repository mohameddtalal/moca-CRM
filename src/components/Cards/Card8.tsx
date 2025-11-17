import Image from "next/image";

interface Card8Props {
  title: string;
  description: string;
  color: string;
}

const Card8 = ({ title, description, color }: Card8Props) => {
  return (
    <div
      className={`col-start-11 col-end-13 row-start-6 row-end-13 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}
    >
      <div className="grid grid-rows-[auto_1fr_auto] h-full">

        {/* Title */}
        <h2 className="card-title-lg" style={{ color: "var(--black)" }}>
          {title}
        </h2>

        {/* Description */}
        <p
          className="card-description-lg mt-3"
          style={{ color: "var(--black)" }}
        >
          {description}
        </p>

        {/* Arrow Button */}
        <button className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <Image
            src="/assets/arrow_forward.svg"
            alt="Arrow"
            width={24}
            height={24}
          />
        </button>

      </div>
    </div>
  );
};

export default Card8;
