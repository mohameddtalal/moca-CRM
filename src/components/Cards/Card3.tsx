import Image from "next/image";

interface Card3Props {
  title: string;
  description: string;
  color: string;
}

const Card3 = ({ title, description, color }: Card3Props) => {
  return (
    <div
      className={`col-start-8 col-end-11 row-start-1 row-end-8 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}
    >
      <div className="grid grid-rows-[auto_1fr_auto] h-full">
        {/* Title */}
        <h2 className="card-title-lg" style={{ color: "var(--peach)" }}>
          {title}
        </h2>

        {/* Description */}
        <p
          className="card-description-lg mt-3"
          style={{ color: "var(--peach)" }}
        >
          {description}
        </p>

        {/* Arrow Button */}
        <div className="mt-4">
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
    </div>
  );
};

export default Card3;
