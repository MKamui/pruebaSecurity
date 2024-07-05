import Image from "next/image"
import logo from "@/public/assets/logo.jpg"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full h-fit bg-black flex items-center justify-between px-4 md:px-10 fixed top-0 max-w-screen-2xl">
        <div className="w-10 md:w-14 xl:w-20 aspect-square">
            <Link href="/"><Image src={logo} className="w-full h-full hover:animate-pulse" alt="logo"/></Link>
        </div>
        <div className="w-fit text-white text-xs md:text-base lg:text-xl xl:text-2xl">
            <ul className="flex items-center space-x-4 md:space-x-6">
                <Link className="hover:underline" href="#Header"><li>Introducción</li></Link>
                <Link className="hover:underline" href="#About"><li>Presentación</li></Link>
                <Link className="hover:underline" href="#Interests"><li>Intereses</li></Link>
                <Link className="hover:underline" href="#Contact"><li>Contacto</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar