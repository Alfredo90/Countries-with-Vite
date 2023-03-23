import "./App.css";
import { useState } from "react";
import MainCountriesPage from "./components/MainCountriesPage.jsx/MainCountriesPage";
import NavBar from "./components/NavBar.jsx/NavBar";
import useAxios from "./hooks/useAxios";
import SearchBar from "./components/SearchBar.jsx/SearchBar";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const { countries, isLoading, error } = useAxios("https://restcountries.com/v3.1/all");
  if (isLoading) return <h1 className="text-black">LOADING...</h1>;
  if (error) console.log(error);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="font-nunito">
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      {/* <SearchBar/> */}
      <MainCountriesPage countries={countries}/>
    </div>
  );
}

export default App;
