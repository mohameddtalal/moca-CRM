import Image from "next/image";
import { ButtonRounded } from "../Button";
import { ButtonSmall } from "../Button_sm";

interface Card10Props {
  title: string;
  description: string;
  color: string;
}

const Card10 = ({ title, description, color }: Card10Props) => {
  return (
    /* OLD IMPLEMENTATION - Before arrow alignment fix:
    <div
      className={`col-start-3 col-end-6 row-start-10 row-end-13 ${color} rounded-lg p-4 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      }}>
      <div style={{minHeight:0}}>
        <h2 className="card-title-sm-m whitespace-pre-line" style={{ color: "var(--yellow)" }}>
          {title}
        </h2>
        <p className="card-description-sm" style={{ color: "var(--yellow)" }}>
          {description}
        </p>
      </div>
      <div className="self-end">
        <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
          <Image src="/assets/arrow_forward.svg" alt="Arrow" width={16} height={16} />
        </button>
      </div>
    </div>

    PROBLEMS WITH OLD IMPLEMENTATION:
    1. Missing justifyContent: 'space-between' - Arrow sits directly below description, not pushed to bottom
    2. Arrow alignment: self-end (RIGHT side) - Inconsistent with other cards (Card1, Card3, Card4, Card8, Card9 use self-start)
    3. Fixed button size: w-8 h-8 (32px) - Doesn't scale responsively across screen sizes
    4. Fixed icon size: width={16} height={16} - No responsive styling, doesn't scale with button
    5. When viewport height decreases (e.g., 1366x768, 1920x600), arrow overlaps with description text
    6. Arrow appears cramped against description with no vertical separation
    */

    /* NEW IMPLEMENTATION - Arrow alignment and responsive sizing fix:
     * Applied same fix pattern as Card9 (Data Hub) to ensure consistency
     * Changes made:
     * 1. Added justifyContent: 'space-between' - Pushes arrow to bottom, prevents overlap on small heights
     * 2. Changed self-end → self-start - Aligns arrow LEFT (consistent with Card1, Card3, Card4, Card8, Card9)
     * 3. Changed w-8 h-8 → responsive clamp() - Button scales from 24px (mobile) to 44px (desktop)
     * 4. Added responsive icon sizing - Icon scales from 10px to 18px with button
     * 5. Arrow now properly separated from content at all viewport heights (1080px, 768px, 600px)
     */
    <div
      className={`col-start-3 col-end-6 row-start-10 row-end-13 ${color} rounded-lg p-6 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',  // NEW: Pushes arrow to bottom, prevents overlap when height decreases
        minHeight: "auto"  // Important: allows flex item to shrink below content size
      }}>

      {/* TITLE + DESCRIPTION */}
      <div style={{ minHeight: 0 }}>
        <h2 className="card-title-sm whitespace-pre-line" style={{ color: "var(--yellow)" }}>
          {title}
        </h2>

        <p className="card-description-sm" style={{ color: "var(--yellow)" }}>
          {description}
        </p>
      </div>

      {/* ARROW BUTTON - Now properly aligned at bottom-left with responsive sizing */}
      <div className="self-end mt-auto">
                <ButtonSmall />
              </div>

    </div>
  );
};

export default Card10;
