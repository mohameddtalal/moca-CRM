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

export default Card8;
