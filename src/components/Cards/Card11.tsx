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

export default Card11;
