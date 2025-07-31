import { useState, useEffect } from 'react'
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
    <div id="hero" className='bg-[var(--primary5)] h-180 flex items-center 
    place-content-between pl-9'>
      <div id="hero-top">
        <img src="" alt="" />
      </div>

      <div id="hero-left" className=''>
        <div id="title" className='font-bold text-7xl text-[var(--primary1)]
        '>Hello!
        </div>
        <div id="subtitle" className='font-bold text-[var(--primary1)]
        pl-1 -mt-1.5'>
          <span className='font-medium'>I'm a</span><span className='transition-all
          duration-3000 ease-in'> {roles[index]}</span>
        </div>
        <div id="description" className='mt-4 pr-10 pl-1 
        text-[var(--primary1)] '>I'm <span className='font-semibold'>Fajri Bagaskara Budi</span>, I build responsive, user-friendly websites with clean code and thoughtful design.</div>
      </div>

      <div id="hero-right" className="hidden sm:block"></div>
    </div>
  )
}

function AboutMe() {
  return (
    <div id="about-me" className='h-400'></div>
  )
}

export { Hero, AboutMe }