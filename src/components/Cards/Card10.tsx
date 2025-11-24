import { ButtonSmall } from "../Button_sm";

interface Card10Props {
  title: string;
  description: string;
  color: string;
}

const Card10 = ({ title, description, color }: Card10Props) => {
  return (
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
