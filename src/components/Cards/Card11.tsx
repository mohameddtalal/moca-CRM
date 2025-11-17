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
      <div className="grid grid-rows-[auto_1fr_auto] h-full">

        {/* Title */}
        <h2 className="card-title-lg" style={{ color: "var(--purple)" }}>
          {title}
        </h2>

        {/* Description */}
        <p
          className="card-description-lg mt-3 mb-2"
          style={{ color: "var(--purple)" }}
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

export default Card11;
