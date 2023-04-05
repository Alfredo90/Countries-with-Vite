
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

const NavBar = ({toggleDarkMode, darkMode}) => {

  return (
    <nav className="flex items-center justify-between border py-3 px-10 dark:bg-slate-900 dark:text-white ">
      <h1 className='text-2xl font-extrabold '>Where in the world?</h1>
      <button onClick={toggleDarkMode} className='flex items-center justify-between gap-2'>{darkMode ? <BsFillSunFill/> : <BsFillMoonFill/> }</button>
    </nav>
  )
}

export default NavBar
