import '../index.css'
import githubwhite from '../assets/github-white.svg'
import linkedinwhite from '../assets/linkedin-white.svg'

function Navbar() {
  return (
    <nav className="bg-[var(--primary5)] text-[var(--primary1)] flex 
    place-content-between h-18 w-full p-9 sm:px-26 items-center fixed">
      <div id="navbar-left" className="font-bold text-2xl">fjribgs.</div>
      <div id="navbar-center" className="hidden sm:block justify-center">
        <ul className="flex gap-9">
          <li className='cursor-pointer duration-200 ease-in hover:font-bold'><a href="#">Home</a></li>
          <li className='cursor-pointer duration-200 ease-in hover:font-bold'><a href="#">Review</a></li>
          <li className='cursor-pointer duration-200 ease-in hover:font-bold'><a href="#">Contact</a></li>
        </ul>
      </div>
      <div id="navbar-right" className='flex gap-2'>
        <a href="#" className=''><img src={githubwhite} alt="" 
        className='size-6 lg:size-8'/></a>
        <a href="#" className=''><img src={linkedinwhite} alt="" 
        className='size-6 lg:size-8'/></a>
      </div>
    </nav>
  )
}

export default Navbar;