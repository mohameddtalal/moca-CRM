import Image from "next/image";

interface Card10Props {
    title: string,
    description: string,
    color: string
    
}

const Card10 = ({title, description,color}:Card10Props) => {
    return (  
    <div className={`col-start-3 col-end-6 row-start-10 row-end-13 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}>
        <div className="flex-1 flex flex-col">
            <div className="grid grid-cols-1">
                <h2 className="card-title-sm"  style={{ color: 'var(--yellow)' }}>{title}</h2>
                <p className="card-description-md mt-3"style={{ color: 'var(--yellow)' }}>{description}</p>
                 {/* Arrow Button */}
               <div className="place-self-start mb-2">
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
        </div>
    </div>
     )
}


export default Card10