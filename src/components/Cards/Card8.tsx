import Image from "next/image";

interface Card8Props {
  title: string;
  description: string;
  color: string;
}

const Card8 = ({ title, description, color }: Card8Props) => {
  return (
    /* OLD IMPLEMENTATION - Before arrow overlap fix:
    <div
      className={`col-start-11 col-end-13 row-start-6 row-end-13 ${color} rounded-lg p-4 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      }}>
      <div style={{minHeight:0}}>
        <h2 className="card-title-lg whitespace-pre-line" style={{ color: "var(--black)" }}>
          {title}
        </h2>
        <p className="card-description-lg mt-2" style={{ color: "var(--black)" }}>
          {description}
        </p>
      </div>
      <div className="self-start ">
        <button
          className="bg-black rounded-full flex items-center justify-center"
          style={{
            width: "clamp(24px, 5vw, 44px)",
            height: "clamp(24px, 5vw, 44px)",
          }}>
          <Image
            src="/assets/arrow_forward.svg"
            alt="Arrow"
            width={24}
            height={24}
            style={{
              width: "clamp(10px, 3vw, 18px)",
              height: "clamp(10px, 3vw, 18px)",
            }}
          />
        </button>
      </div>
    </div>

    PROBLEMS WITH OLD IMPLEMENTATION:
    1. Missing justifyContent: 'space-between' - Arrow sits directly below description
    2. When viewport height decreases, arrow overlaps with description text
    Note: Button and icon already had responsive sizing (clamp), so only justifyContent needed
    */

    /* NEW IMPLEMENTATION - Arrow overlap prevention:
     * Changes made:
     * 1. Added justifyContent: 'space-between' - Prevents arrow overlap on small viewport heights
     * Note: Button and icon sizing already correct (responsive clamp values)
     */
    <div
      className={`col-start-11 col-end-13 row-start-6 row-end-13 ${color} rounded-lg p-4 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',  // NEW: Prevents arrow overlap when height decreases
        minHeight: 0  // Important: allows flex item to shrink below content size
      }}>

      {/* TITLE + DESCRIPTION */}
      <div style={{ minHeight: 0 }}>
        <h2 className="card-title-lg whitespace-pre-line" style={{ color: "var(--black)" }}>
          {title}
        </h2>

        <p className="card-description-lg mt-2" style={{ color: "var(--black)" }}>
          {description}
        </p>
      </div>

      {/* ARROW BUTTON - Already has responsive sizing */}
      <div className="self-start ">
        <button
          className="bg-black rounded-full flex items-center justify-center"
          style={{
            width: "clamp(24px, 5vw, 44px)",
            height: "clamp(24px, 5vw, 44px)",
          }}
        >
          <Image
            src="/assets/arrow_forward.svg"
            alt="Arrow"
            width={24}
            height={24}
            style={{
              width: "clamp(10px, 3vw, 18px)",
              height: "clamp(10px, 3vw, 18px)",
            }}
          />
        </button>
      </div>

    </div>
  );
};

export default Card8;
