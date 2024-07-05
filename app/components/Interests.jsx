import Card from "./Card"
import boardgames from "@/public/assets/boardgames.webp"
import videogames from "@/public/assets/videogames.webp"
import coffee from "@/public/assets/coffee.webp"
import programming from "@/public/assets/programming.webp"

const Interests = () => {
  return (
    <section className='w-full min-h-screen md:max-h-screen bg-slate-400 flex flex-col items-center justify-center py-14 md:py-0' id="Interests">
      <div className="w-full text-center pb-20">
        <h3 className="font-semibold text-2xl xl:text-5xl">Algunos de mis intereses</h3>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 place-items-center gap-y-10 md:gap-y-20">
        <Card image={boardgames} title={"Juegos de mesa"} description={"Me gustan muchos los juegos de mesa no tradicionales, como Brass, Concordia, entre otros. Tengo una colección pequeña de ellos."}/>
        <Card image={videogames} title={"Videojuegos"} description={"Desde pequeño jugando toda clase de titulos, full PC y principalmente gozando en Steam."}/>
        <Card image={coffee} title={"Café"} description={"Acompañante de mis demás pasiones, me gusta prepaparlo en prensa francesa, negro y sin azúcar."}/>
        <Card image={programming} title={"Programación"} description={"Más allá de ser el trabajo, disfruto de aprender nuevas cosas mientras perfecciono lo que ya manejo."}/>
      </div>
    </section>
  )
}

export default Interests