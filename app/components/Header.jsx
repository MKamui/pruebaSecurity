import Image from "next/image"
import fotoMario from "@/public/assets/fotoEmpresa.webp"

const Header = () => {
  return (
    <header className='w-full min-h-screen max-h-screen bg-slate-700 flex justify-center text-white' id="Header">
        <div className='flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 p-10 text-center md:text-start justify-center md:justify-start'>
            <div className="w-[300px] lg:w-[350px] xl:w-[450px] aspect-square rounded-full">
                <Image src={fotoMario} className="w-full h-full rounded-full hover:animate-spin-slow" alt="foto personal"/>
            </div>
            <div className="text-3xl xl:text-5xl">
                <h1 className="uppercase font-bold">Mario Franco</h1>
                <h2>Su próximo developer</h2>
            </div>
        </div>
    </header>
  )
}

export default Header