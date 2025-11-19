import Image from "next/image";

interface Card6Props {
  title: string;
  description: string;
  color: string;
}

const Card6 = ({ title, description, color }: Card6Props) => {
  return (
    <div
      className={`col-start-3 col-end-6 row-start-6 row-end-10 ${color} rounded-lg p-4 card-bg`}
    style={{
                flex: '0 0 1',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0  // Important: allows flex item to shrink below content size
                }}>
 

        {/* TITLE + DESCRIPTION */}
        <div style={{minHeight:0}}>
          <h2 className="card-title-md whitespace-pre-line" style={{ color: "var(--yellow)" }}>
            {title}
          </h2>

          <p className="card-description-md mt-2" style={{ color: "var(--yellow)" }}>
            {description}
          </p>
        </div>

        {/* ARROW BUTTON */}
        <div className="self-start">
          <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
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

export default Card6;
