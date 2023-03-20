
import {BsFillMoonFill} from 'react-icons/bs'

const NavBar = () => {

  return (
    <nav className="flex items-center justify-between border py-3 px-10">
      <h1 className='text-2xl '>Where in the world?</h1>
      <button className='flex items-center justify-between gap-2'><BsFillMoonFill/>Dark Mode</button>
    </nav>
  )
}

export default NavBar
