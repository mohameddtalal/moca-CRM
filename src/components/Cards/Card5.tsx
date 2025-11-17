import Image from "next/image";

interface Card5Props {
  title: string;
  description: string;
  color: string;
}

const Card5 = ({ title, description, color }: Card5Props) => {
  return (
    <div
      className={`col-start-1 col-end-3 row-start-6 row-end-10 ${color} rounded-lg p-4 h-full w-full overflow-hidden flex flex-col card-bg`}
    >
      <div className="grid grid-rows-[auto_1fr_auto] h-full">
        
        {/* Title */}
        <h2 className="card-title-sm" style={{ color: "var(--green)" }}>
          {title}
        </h2>

        {/* Description */}
        <p className="card-description-sm mt-3" style={{ color: "var(--green)" }}>
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

export default Card5;
