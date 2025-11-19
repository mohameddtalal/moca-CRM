import Image from "next/image";

interface Card10Props {
  title: string;
  description: string;
  color: string;
}

const Card10 = ({ title, description, color }: Card10Props) => {
  return (
    <div
      className={`col-start-3 col-end-6 row-start-10 row-end-13 ${color} rounded-lg p-4 card-bg`}
    style={{
                flex: '0 0 1',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0  // Important: allows flex item to shrink below content size
                }}>
  

        {/* TITLE + DESCRIPTION */}
        <div style={{minHeight:0}}>
          <h2 className="card-title-sm-m whitespace-pre-line" style={{ color: "var(--yellow)" }}>
            {title}
          </h2>

          <p className="card-description-sm" style={{ color: "var(--yellow)" }}>
            {description}
          </p>
        </div>

        {/* ARROW BUTTON */}
        <div className="self-end">
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

export default Card10;
