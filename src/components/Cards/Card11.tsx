import { ButtonRounded } from "../Button";

interface Card11Props {
  title: string;
  description: string;
  color: string;
}

const Card11 = ({ title, description, color }: Card11Props) => {
  return (
    <div
      className={`col-start-6 col-end-11 row-start-8 row-end-13 ${color} rounded-lg p-6 card-bg`}
      style={{
        flex: '0 0 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',  // NEW: Prevents arrow overlap when height decreases
        minHeight: "auto"  // Important: allows flex item to shrink below content size
      }}>

      {/* TITLE + DESCRIPTION */}
      <div style={{ minHeight: 0 }}>
        <h2 className="card-title-lg whitespace-pre-line" style={{ color: "var(--purple)" }}>
          {title}
        </h2>

        <p className="card-description-lg mt-2 mb-2" style={{ color: "var(--purple)" }}>
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

export default Card11;
