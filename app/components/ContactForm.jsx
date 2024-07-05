"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import cat from "@/public/assets/cat.webp"

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState()
  const [submited, setSubmited] = useState()

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === ""){
      setSubmited()
      setError('Por favor entrar un nombre')
    }
    else if (!validateEmail(email) || email === "") {
      setSubmited()
      setError('Por favor entrar un email valido');
    }
    else if (message === ""){
      setSubmited()
      setError('Por favor entrar un mensaje')
    }
    else {
      setError()
      setSubmited(`Gracias por el mensaje ${name}`);
      setName("")
      setEmail("")
      setMessage("")
    }
  }

  return (
    <section className='w-full min-h-screen bg-slate-300 flex flex-col items-center justify-center py-14 md:py-24' id="Contact">
      <div className='w-full text-center pb-10 xl:pb-20'>
        <h3 className='font-semibold text-2xl xl:text-5xl'>Desea contactarme? Escríbeme</h3>
      </div> 
      <div className='w-[80%] md:w-[60%] bg-white rounded-xl py-10 xl:py-20 flex flex-col items-center text-xl xl:text-3xl'>
        <form onSubmit={handleSubmit} className='space-y-6 flex flex-col items-center w-full'>
          <div className='flex flex-col items-center space-y-2 w-[65%] md:w-[50%]'>
              <label className='font-semibold' htmlFor="Name">Nombre</label>
              <input id='Name' name='Name' type="text" className='bg-gray-600 rounded-full w-full p-2 text-white' placeholder='Nombre...' onChange={(event) => setName(event.target.value)} value={name}></input>
          </div>
          <div className='flex flex-col items-center space-y-2 w-[65%] md:w-[50%]'>
              <label className='font-semibold' htmlFor="Email">Email</label>
              <input id='Email' name='Email' type="email" className='bg-gray-600 rounded-full w-full p-2 text-white' placeholder='Email...' onChange={(event) => setEmail(event.target.value)} value={email}></input>
          </div>
          <div className='flex flex-col items-center space-y-2 w-[65%] md:w-[50%]'>
              <label className='font-semibold' htmlFor="Message">Mensaje</label>
              <input id='Message' name='Message' type="text" className='bg-gray-600 rounded-full w-full p-2 text-white' placeholder='Mensaje...' onChange={(event) => setMessage(event.target.value)} value={message}></input>
          </div>
          <div className='py-5 xl:py-10'>
            <button className='w-fit bg-black hover:bg-green-600 py-2 xl:py-3 px-4 xl:px-5 rounded-full hover:scale-105 text-white'>Contactar</button>
          </div>
        </form>
        {error? <p className='text-red-600 font-semibold'>{error}</p> : null}
        {submited?
        <div className='flex flex-col items-center space-y-4 text-center'>
          <p className='text-green-600 font-semibold'>{submited}</p>
          <div className='w-[200px] xl:w-[250px] aspect-square rounded-xl'>
            <Image src={cat} className='w-full h-full rounded-xl object-center object-cover' alt='Cat smile'/>
          </div>
        </div>
        : null}
      </div>
    </section>
  )
}

export default ContactForm