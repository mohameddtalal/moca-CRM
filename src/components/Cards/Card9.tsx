import { ButtonSmall } from "../Button_sm";

interface Card9Props {
  title: string;
  description: string;
  color: string;
}

const Card9 = ({ title, description, color }: Card9Props) => {
  return (
    <div
      className={`col-start-1 col-end-3 row-start-10 row-end-13 ${color} rounded-lg p-6 card-bg`}
      style={{
                flex: '0 0 1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',  // NEW: Pushes arrow to bottom, separates from description
                minHeight: "auto"  // Important: allows flex item to shrink below content size
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
        <div className="self-end mt-auto">
                  <ButtonSmall />
                </div>
      </div>

  );
};

export default Card9;
