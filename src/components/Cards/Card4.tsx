import Image from "next/image";

interface Card4Props {
  title: string;
  description: string;
  color: string;
}

const Card4 = ({ title, description, color }: Card4Props) => {
  return (
    <div
      className={`col-start-11 col-end-13 row-start-1 row-end-6 ${color} rounded-lg p-4 card-bg`}
    style={{
                flex: '0 0 1',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0  // Important: allows flex item to shrink below content size
                }}
    >

        {/* TITLE + DESCRIPTION */}
        <div style={{minHeight:0}}>
          <h2 className="card-title-md whitespace-pre-line" style={{ color: "var(--purple)" }}>
            {title}
          </h2>

          <p className="card-description-md mt-2" style={{ color: "var(--purple)" }}>
            {description}
          </p>
        </div>

        {/* ARROW BUTTON */}
        <div className="self-start">
          <button
            className="bg-black w-10 h-10 rounded-full flex items-center justify-center"
          >
            <Image
              src="/assets/arrow_forward.svg"
              alt="Arrow"
              width={16}
              height={16}
            />
          </button>
        </div>

      </div>

  );
};

export default Card4;
