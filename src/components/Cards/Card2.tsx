import Image from "next/image";
import { ButtonSmall } from "../Button_sm";

interface Card2Props {
    title: string,
    description: string,
    color: string
}

const Card2 = ({ title, description, color }: Card2Props) => {
    return (
        /* OLD IMPLEMENTATION - Before arrow overlap fix:
        <div className={`${color} col-start-6 col-end-8 row-start-1 row-end-6 rounded-lg p-4 card-bg`}
          style={{
            flex: '0 0 1',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0
          }}>
          <div style={{ minHeight: 0}}>
            <h2 className="card-title-md whitespace-pre-line" style={{ color: 'var(--skin-pink)' }}>
              {title}
            </h2>
            <p className="card-description-sm mt-2 mb-2" style={{ color: 'var(--skin-pink)' }}>
              {description}
            </p>
          </div>
          <div className=" self-start">
            <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
              <Image src="/assets/arrow_forward.svg" alt="Arrow" width={16} height={16} />
            </button>
          </div>
        </div>

        PROBLEMS WITH OLD IMPLEMENTATION:
        1. Missing justifyContent: 'space-between' - Arrow sits directly below description
        2. When viewport height decreases (e.g., 1366x768, 1920x600), arrow overlaps with description text
        3. Fixed button size: w-8 h-8 (32px) - Doesn't scale responsively
        4. Fixed icon size: width={16} height={16} - No responsive styling
        */

        /* NEW IMPLEMENTATION - Arrow overlap prevention and responsive sizing:
         * Changes made:
         * 1. Added justifyContent: 'space-between' - Prevents arrow overlap on small viewport heights
         * 2. Changed w-8 h-8 → responsive clamp() - Button scales from 24px to 44px
         * 3. Added responsive icon sizing - Icon scales from 10px to 18px
         */
        <div className={`${color} col-start-6 col-end-8 row-start-1 row-end-6 rounded-lg p-4 card-bg`}
          style={{
            flex: '0 0 1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',  // NEW: Prevents arrow overlap when height decreases
            minHeight: 0  // Important: allows flex item to shrink below content size
          }}>

          {/* Title & Description */}
          <div style={{ minHeight: 0 }}>
            <h2 className="card-title-md whitespace-pre-line" style={{ color: 'var(--skin-pink)' }}>
              {title}
            </h2>

            <p className="card-description-sm mt-2 mb-2" style={{ color: 'var(--skin-pink)' }}>
              {description}
            </p>
          </div>

          {/* Arrow button at the bottom - Now with responsive sizing */}
          <div className="self-end mt-auto">
                    <ButtonSmall />
                  </div>
        </div>

    );
}

export default Card2;
