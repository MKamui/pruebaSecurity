import Image from "next/image"
import aws from "@/public/assets/aws.png"
import firebase from "@/public/assets/firebase.png"
import javascript from "@/public/assets/javascript.png"
import mongo from "@/public/assets/mongo.png"
import nextjs from "@/public/assets/nextjs.png"
import node from "@/public/assets/node.png"
import postgres from "@/public/assets/postgres.png"
import react from "@/public/assets/react.png"
import redux from "@/public/assets/redux.png"
import tailwind from "@/public/assets/tailwind.png"

const About = () => {
  return (
    <section className='w-full min-h-screen md:max-h-screen bg-slate-500 flex justify-center items-center' id="About">
      <div className='flex flex-col items-center p-10 max-w-[90%] xl:max-w-[80%]'>
        <h3 className="font-semibold text-2xl xl:text-5xl pb-2 md:pb-5 xl:pb-10">Acerca de mi</h3>
        <br/>
        <p className="text-xl xl:text-3xl pb-28 md:pb-20 xl:pb-32">
            Soy un programador Full Stack enfocado en desarrollo web, empleando principalmente las siguientes herramientas y tecnologías:
            <br/><br/> 
            JavaScript, React, Next, Tailwind, NodeJS, MongoDB, AWS, Firebase, PostgreSQL, Jest y Redux.
            <br/><br/> 
            En términos de trabajo cuento con experiencia en metodologías ágiles, como SCRUM, y software de control de tareas como JIRA y Notion.
            <br/><br/> 
            Adicionalmente, tengo experiencia de más de diez años como docente en diversas instituciones educativas y procesos de investigación universitarios.
        </p>
        <div className="w-full flex flex-wrap justify-between items-center animate-bounce">
          <div className="w-[80px] aspect-square">
            <Image src={aws} className="w-full h-full rounded-xl object-center object-cover" alt="AWS"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={firebase} className="w-full h-full rounded-xl object-center object-cover" alt="Firebase"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={javascript} className="w-full h-full rounded-xl object-center object-cover" alt="JS"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={mongo} className="w-full h-full rounded-xl object-center object-cover" alt="Mongo"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={nextjs} className="w-full h-full rounded-xl object-center object-cover" alt="NextJS"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={node} className="w-full h-full rounded-xl object-center object-cover" alt="Node"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={postgres} className="w-full h-full rounded-xl object-center object-cover" alt="Postgres"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={react} className="w-full h-full rounded-xl object-center object-cover" alt="React"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={redux} className="w-full h-full rounded-xl object-center object-cover" alt="Redux"/>
          </div>
          <div className="w-[80px] aspect-square">
            <Image src={tailwind} className="w-full h-full rounded-xl object-center object-cover" alt="Tailwind"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About