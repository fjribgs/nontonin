import '../index.css'

function Hero() {
  return (
    <div id="hero" className='bg-[var(--primary1)] h-170 w-full sm:h-240 flex 
    px-8 sm:px-25 justify-between items-center text-[var(--primary5)]'>
      <div id="hero-left" className=''>
        <div id="title" className='text-5xl sm:text-7xl'>Welcome to 
          <span className='font-bold text-6xl sm:text-7xl'> nontonin.</span></div>
        <div id="subtitle" className='mt-5 font-medium sm:text-2xl'>
          Anda dapat melihat ulasan ngasal saya di website ini
        </div>
        <button id="see-review" className='bg-[var(--primary5)] my-5
        px-5 py-3 text-[var(--primary1)] rounded-3xl hover:bg-[var(--primary3)]
        hover:text-[var(--primary5)] duration-200 ease-in'>Lihat Review</button>
      </div>
      <div id="hero-right"></div>
    </div>
  )
}

export default Hero