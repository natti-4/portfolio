
const Header: React.FC = () => {
  return (
    <header className="h-auto">
      <div className="md:p-4 py-4 w-full flex flex-row bg-blue-50 fixed z-10">
        <a className="flex-auto md:text-4xl text-xl font-bold md:ml-16"><a href="#">portfolio</a></a>
        <nav className="flex-auto md:mr-16">
          <ul className="flex justify-end">
            <li className="md:pr-8 pr-4 md:text-2xl"><a href="#about">about</a></li>
            <li className="md:pr-8 pr-4 md:text-2xl"><a href="#skill">skill</a></li>
            <li className="md:pr-8 pr-4 md:text-2xl"><a href="#work">work</a></li>
            <li className="md:text-2xl"><a href="#contact">contact</a></li>
          </ul>
        </nav>
      </div>
      <img src="/top.jpeg" className="md:h-screen h-sm-top w-full relative"></img>
      <p className="md:text-6xl text-4xl text-white absolute top-1/2 md:left-24 left-10">natsuki nakano <br/>portfolio</p>
    </header>
  )
}

export default Header
