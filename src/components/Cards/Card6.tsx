import Image from "next/image";
import { ButtonRounded } from "../Button";

interface Card6Props {
  title: string;
  description: string;
  color: string;
}

const Card6 = ({ title, description, color }: Card6Props) => {
  return (
    /* OLD IMPLEMENTATION - Before arrow overlap fix:
    <div
      className={`col-start-3 col-end-6 row-start-6 row-end-10 ${color} rounded-lg p-4 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      }}>
      <div style={{minHeight:0}}>
        <h2 className="card-title-md whitespace-pre-line" style={{ color: "var(--yellow)" }}>
          {title}
        </h2>
        <p className="card-description-md mt-2" style={{ color: "var(--yellow)" }}>
          {description}
        </p>
      </div>
      <div className="self-start">
        <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
          <Image src="/assets/arrow_forward.svg" alt="Arrow" width={16} height={16} />
        </button>
      </div>
    </div>

    PROBLEMS WITH OLD IMPLEMENTATION:
    1. Missing justifyContent: 'space-between' - Arrow sits directly below description
    2. When viewport height decreases, arrow overlaps with description text
    3. Fixed button size: w-8 h-8 (32px) - Doesn't scale responsively
    4. Fixed icon size: width={16} height={16} - No responsive styling
    */

    /* NEW IMPLEMENTATION - Arrow overlap prevention and responsive sizing:
     * Changes made:
     * 1. Added justifyContent: 'space-between' - Prevents arrow overlap on small viewport heights
     * 2. Changed w-8 h-8 → responsive clamp() - Button scales from 24px to 44px
     * 3. Added responsive icon sizing - Icon scales from 10px to 18px
     */
    <div
      className={`col-start-3 col-end-6 row-start-6 row-end-10 ${color} rounded-lg p-4 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',  // NEW: Prevents arrow overlap when height decreases
        minHeight: 0  // Important: allows flex item to shrink below content size
      }}>

      {/* TITLE + DESCRIPTION */}
      <div style={{ minHeight: 0 }}>
        <h2 className="card-title-md whitespace-pre-line" style={{ color: "var(--yellow)" }}>
          {title}
        </h2>

        <p className="card-description-md mt-2" style={{ color: "var(--yellow)" }}>
          {description}
        </p>
      </div>

      {/* ARROW BUTTON - Now with responsive sizing */}
      <div className="self-start mt-auto">
                <ButtonRounded />
              </div>

    </div>

  );
};

export default Card6;
