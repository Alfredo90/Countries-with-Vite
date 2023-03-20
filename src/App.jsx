import "./App.css";
import MainCountriesPage from "./components/MainCountriesPage.jsx/MainCountriesPage";
import NavBar from "./components/NavBar.jsx/NavBar";
import useAxios from "./hooks/useAxios";

function App() {
  const { countries, isLoading, error } = useAxios("https://restcountries.com/v3.1/all");
  if (isLoading) return <h1 className="text-black">LOADING...</h1>;
  if (error) console.log(error);

  return (
    <div>
      <NavBar />
      <MainCountriesPage countries={countries}/>
    </div>
  );
}

export default App;
