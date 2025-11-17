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

 {/* ARROW BUTTON — stays inside card */}
<div className="place-self-start mt-[clamp(2px,1vw,8px)]">
  <button
    className="bg-black rounded-full flex items-center justify-center"
    style={{
      width: "clamp(24px, 5vw, 44px)",  // smaller min & max
      height: "clamp(24px, 5vw, 44px)", // smaller min & max
    }}
  >
    <Image
      src="/assets/arrow_forward.svg"
      alt="Arrow"
      width={24} // fallback
      height={24} // fallback
      style={{
        width: "clamp(10px, 3vw, 18px)",  // smaller icon for mobile/tablet
        height: "clamp(10px, 3vw, 18px)",
      }}
    />
  </button>
</div>

      </div>
    </div>
  );
};

export default Card3;
