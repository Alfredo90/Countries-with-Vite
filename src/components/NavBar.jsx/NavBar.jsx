
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

const NavBar = ({toggleDarkMode, darkMode}) => {

  return (
    <nav className="flex items-center justify-between border py-3 px-10 ">
      <h1 className='text-2xl font-extrabold '>Where in the world?</h1>
      <button onClick={toggleDarkMode} className='flex items-center justify-between gap-2'>{darkMode ? <BsFillMoonFill/> : <BsFillSunFill/>}</button>
    </nav>
  )
}

export default NavBar
