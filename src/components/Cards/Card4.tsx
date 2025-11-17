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
      <div className="grid grid-rows-[auto_1fr_auto] h-full">
        
        {/* Title */}
        <h2 className="card-title-md" style={{ color: "var(--purple)" }}>
          {title}
        </h2>

        {/* Description */}
        <p
          className="card-description-md mt-3 mb-3"
          style={{ color: "var(--purple)" }}
        >
          {description}
        </p>

        {/* Arrow Button */}
        <button className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <Image
            src="/assets/arrow_forward.svg"
            alt="Arrow"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default Card4;
