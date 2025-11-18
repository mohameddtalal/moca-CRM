import Image from "next/image";

interface Card7Props {
    title: string,
    description: string,
    color: string
    
}

const Card7 = ({title, description,color}:Card7Props) => {
    return (  
    <div
        className={`col-start-6 col-end-8 row-start-6 row-end-8 ${color} rounded-lg p-4 h-full w-full flex flex-col card-bg`}
        >
        <div className="flex-1 flex items-center justify-center">
            <Image
            src="\assets\Layer2.svg"
            alt="logo2"
            width={150}
            height={150}
            />
        </div>
    </div>

     )
}


export default Card7