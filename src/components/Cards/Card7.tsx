import Image from "next/image";

interface Card7Props {
    title: string,
    description: string,
    color: string
    
}

const Card7 = ({title, description,color}:Card7Props) => {
    return (  
    <div className={`col-start-6 col-end-8 row-start-6 row-end-8 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}>
        <div className="flex-1 flex flex-col">
            <div className="grid grid-cols-1">
                <h2 className="card-title-lg text-xl font-bold mb-4" style={{color:'var(--yellow)'}}>{title}</h2>
                <p className="text-gray-600 mt-3">{description}</p>
            </div>
        </div>
    </div>
     )
}


export default Card7