import { useState, useEffect } from 'react'
import laios from '../assets/laios.jpeg'
import '../index.css'

function Hero() {
  const roles = ['Frontend Developer', 'UI/UX Designer']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <div id="hero" className='bg-[var(--primary5)] h-180 sm:h-250 flex items-center 
    place-content-between pl-9 sm:pl-25 sm:pr-25'>
      <div id="hero-left" className=''>
        <img src={laios} alt="laios" className='size-48 rounded-3xl mb-7 block sm:hidden'/>
        <div id="title" className='font-bold text-6xl sm:text-[120px] md:text-[180px] 
        text-[var(--primary1)] '>Hello!</div>
        <div id="subtitle" className='font-bold md:pl-2 text-[21px] 
        sm:text-[45px] text-[var(--primary1)] pl-1 -mt-1.5 '>
          <span className='font-medium'>I'm a</span><span 
          className='transition-all duration-3000 ease-in'> {roles[index]}</span>
        </div>
        <div id="description" className='mt-4 pr-10 pl-1 
        text-[var(--primary1)] max-w-80 sm:pl-2 sm:mt-10 sm:max-w-160 
        sm:text-[20px]'>I'm <span className='font-semibold'>Fajri Bagaskara 
        Budi</span>, I build responsive, user-friendly websites with clean 
        code and thoughtful design.</div>
      </div>

      <div id="hero-right" className="size-130 hidden sm:block ">
        <img src={laios} alt="laios" className='rounded-3xl mb-7 
        hidden sm:block'/>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div id="about-me" className='h-400'></div>
  )
}

export { Hero, AboutMe }