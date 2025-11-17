import Image from "next/image";

interface Card6Props {
  title: string;
  description: string;
  color: string;
}

const Card6 = ({ title, description, color }: Card6Props) => {
  return (
    <div
      className={`col-start-3 col-end-6 row-start-6 row-end-10 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}
    >
      <div className="grid grid-rows-[auto_1fr_auto] h-full">
        
        {/* Title */}
        <h2 className="card-title-md" style={{ color: "var(--yellow)" }}>
          {title}
        </h2>

        {/* Description */}
        <p className="card-description-md mt-3" style={{ color: "var(--yellow)" }}>
          {description}
        </p>

        {/* Arrow Button */}
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
  );
};

export default Card6;
