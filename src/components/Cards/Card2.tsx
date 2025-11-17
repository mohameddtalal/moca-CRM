import Image from "next/image";

interface Card2Props {
    title: string,
    description: string,
    color: string
}

const Card2 = ({ title, description, color }: Card2Props) => {
    return (
        <div className={`${color} col-start-6 col-end-8 row-start-1 row-end-6 rounded-lg p-4 h-full w-full flex flex-col card-bg`}>
            
            {/* Use flex-col with justify-between for top + bottom spacing */}
            <div className="flex flex-col flex-1 justify-between min-h-0">

                {/* Title & Description */}
                <div>
                    <h2 className="card-title-md whitespace-pre-line" style={{ color: 'var(--skin-pink)' }}>
                        {title}
                    </h2>

                    <p className="card-description-sm mt-2" style={{ color: 'var(--skin-pink)' }}>
                        {description}
                    </p>
                </div>

                {/* Arrow button at the bottom */}
                <div className=" self-start">
                    <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
                        <Image src="/assets/arrow_forward.svg" alt="Arrow" width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card2;
