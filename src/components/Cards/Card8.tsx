import { ButtonRounded } from "../Button";

interface Card8Props {
  title: string;
  description: string;
  color: string;
}

const Card8 = ({ title, description, color }: Card8Props) => {
  return (
    <div
      className={`col-start-11 col-end-13 row-start-6 row-end-13 ${color} rounded-lg p-6 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',  // NEW: Prevents arrow overlap when height decreases
        minHeight: "auto"  // Important: allows flex item to shrink below content size
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
      <div className="self-end mt-auto">
                <ButtonRounded />
              </div>
    </div>
  );
};

export default Card8;
