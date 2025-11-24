import { ButtonSmall } from "../Button_sm";

interface Card6Props {
  title: string;
  description: string;
  color: string;
}

const Card6 = ({ title, description, color }: Card6Props) => {
  return (
    <div
      className={`col-start-3 col-end-6 row-start-6 row-end-10 ${color} rounded-lg p-6 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',  // NEW: Prevents arrow overlap when height decreases
        minHeight: "auto"  // Important: allows flex item to shrink below content size
      }}>

      {/* TITLE + DESCRIPTION */}
      <div style={{ minHeight: 0 }}>
        <h2 className="card-title-md whitespace-pre-line" style={{ color: "var(--yellow)" }}>
          {title}
        </h2>

        <p className="card-description-sm mt-2" style={{ color: "var(--yellow)" }}>
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

export default Card6;
