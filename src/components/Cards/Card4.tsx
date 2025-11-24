import {ButtonSmall } from "../Button_sm";

interface Card4Props {
  title: string;
  description: string;
  color: string;
}

const Card4 = ({ title, description, color }: Card4Props) => {
  return (
    <div
      className={`col-start-11 col-end-13 row-start-1 row-end-6 ${color} rounded-lg p-6 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',  // NEW: Prevents arrow overlap when height decreases
        minHeight: "auto"  // Important: allows flex item to shrink below content size
      }}
    >

      {/* TITLE + DESCRIPTION */}
      <div style={{ minHeight: 0 }}>
        <h2 className="card-title-md whitespace-pre-line" style={{ color: "var(--purple)" }}>
          {title}
        </h2>

        <p className="card-description-sm mt-2" style={{ color: "var(--purple)" }}>
          {description}
        </p>
      </div>

      {/* ARROW BUTTON - Now with responsive sizing */}
      <div className="self-end mt-auto">
                <ButtonSmall />
              </div>
    </div>

  );
};

export default Card4;
