import Image from "next/image";
import { ButtonRounded } from "../Button";

interface Card9Props {
  title: string;
  description: string;
  color: string;
}

const Card9 = ({ title, description, color }: Card9Props) => {
  return (
    /* OLD - Before arrow alignment fix:
    <div
      className={`col-start-1 col-end-3 row-start-10 row-end-13 ${color} rounded-lg p-4 card-bg`}
      style={{
                flex: '0 0 1',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0
                }}
    >
        <div style={{ minHeight: 0}}>
          <h2 className="card-title-sm whitespace-pre-line" style={{ color: "var(--black)" }}>
            {title}
          </h2>
          <p className="card-description-sm" style={{ color: "var(--black)" }}>
            {description}
          </p>
        </div>
        <div className="self-end">
          <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
            <Image src="/assets/arrow_forward.svg" alt="Arrow" width={16} height={16} />
          </button>
        </div>
      </div>
    PROBLEMS WITH OLD APPROACH:
    1. Arrow positioned on RIGHT (self-end) - inconsistent with Card3, Card4, Card8 which use self-start (left)
    2. No vertical spacing - arrow sits directly below description, not pushed to bottom
    3. Fixed size (w-8 h-8 = 32px) - doesn't scale responsively like other cards
    4. Arrow icon fixed at 16px - doesn't scale responsively
    5. Visually unbalanced - appears cramped and unprofessional
    */

    // NEW IMPLEMENTATION - Arrow alignment fix:
    // Changes made:
    // 1. Added justifyContent: 'space-between' to push arrow to bottom of card
    // 2. Changed self-end → self-start to align arrow left (consistent with other cards)
    // 3. Changed fixed w-8 h-8 → responsive clamp(24px, 5vw, 44px) to scale across screen sizes
    // 4. Added responsive sizing to arrow icon: clamp(10px, 3vw, 18px)
    // Result: Arrow now positioned at bottom-left, scales responsively, looks professional
    <div
      className={`col-start-1 col-end-3 row-start-10 row-end-13 ${color} rounded-lg p-4 card-bg`}
      style={{
                flex: '0 0 1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',  // NEW: Pushes arrow to bottom, separates from description
                minHeight: 0  // Important: allows flex item to shrink below content size
                }}
    >


        {/* TITLE + DESCRIPTION */}
        <div style={{ minHeight: 0}}>
          <h2 className="card-title-sm whitespace-pre-line" style={{ color: "var(--black)" }}>
            {title}
          </h2>

          <p className="card-description-sm" style={{ color: "var(--black)" }}>
            {description}
          </p>
        </div>

        {/* ARROW BUTTON - Now properly aligned at bottom-left with responsive sizing */}
        <div className="self-start mt-auto">
                  <ButtonRounded />
                </div>
      </div>

  );
};

export default Card9;
