import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar.jsx/NavBar";
import useAxios from "./hooks/useAxios";
import MainCountriesPage from "./components/MainCountriesPage.jsx/MainCountriesPage";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const { countries, isLoading, error } = useAxios("https://restcountries.com/v3.1/all");
  if (isLoading) return <h1 className="text-black">LOADING...</h1>;
  if (error) console.log(error);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={` w-full md:h-screen font-nunito bg-white dark:bg-slate-800 ${darkMode ? 'dark' : ''} `}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <MainCountriesPage countries={countries}/>
    </div>
  );
}

export default App;
