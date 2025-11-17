import Image from "next/image";

interface Card2Props {
    title: string,
    description: string,
    color: string
    
}

const Card2 = ({title, description,color}:Card2Props) => {
    return (  
 <div className={`${color} col-start-6 col-end-8 row-start-1 row-end-6 rounded-lg p-4 h-full w-full flex flex-col card-bg`}>

        
  <div className="flex-1 flex flex-col min-h-0">
    
    <div className="grid grid-cols-1 min-h-0 overflow-visible">
      
      <h2 className="card-title-md" style={{ color: 'var(--skin-pink)' }}>{title}</h2>

      <p className="card-description-sm mt-3 mb-3" style={{color : 'var(--skin-pink)'}}>
        {description}
      </p>

      <div className="place-self-start mb-2">
        <button className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
          <Image src="/assets/arrow_forward.svg" alt="Arrow" width={16} height={16} />
        </button>
      </div>

    </div>
  </div>

</div>

     )
}


export default Card2