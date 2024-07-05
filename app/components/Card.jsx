import Image from "next/image"

const Card = ({image, title, description}) => {
  return (
    <div className="w-[250px] md:w-[300px] aspect-square rounded-xl flex flex-col items-center hover:scale-105 ease-out duration-300 bg-black group">
        <div className="w-full h-full rounded-xl group-hover:hidden">
            <Image src={image} alt={title} className="w-full h-full rounded-xl object-center object-cover" />
        </div>
        <div className="w-[85%] h-full group-hover:flex flex-col justify-center items-center text-white hidden space-y-4">
            <h4 className="text-xl xl:text-3xl font-semibold">{title}</h4>
            <p className="xl:text-xl">{description}</p>
        </div>
    </div>
  )
}

export default Card