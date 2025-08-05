import '../index.css'

function Navbar() {
  return (
    <nav id="navbar" className="h-18 w-full bg-[var(--primary1)] flex
    items-center justify-between px-8 sm:px-24 text-[var(--primary5)] fixed">
      <div id="navbar-left" className="font-bold text-3xl">nontonin.</div>
      <div id="navbar-middle"></div>
      <div id="navbar-right"></div>
    </nav>
  )
}

export default Navbar;