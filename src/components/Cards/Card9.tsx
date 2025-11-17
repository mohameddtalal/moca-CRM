import Image from "next/image";

interface Card9Props {
  title: string;
  description: string;
  color: string;
}

const Card9 = ({ title, description, color }: Card9Props) => {
  return (
    <div
      className={`col-start-1 col-end-3 row-start-10 row-end-13 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}
    >
      <div className="grid grid-rows-[auto_1fr_auto] h-full">

        {/* Title */}
        <h2 className="card-title-sm" style={{ color: "var(--black)" }}>
          {title}
        </h2>

        {/* Description */}
        <p
          className="card-description-sm mt-3"
          style={{ color: "var(--black)" }}
        >
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

export default Card9;
