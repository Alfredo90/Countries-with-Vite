import CountryCards from "./CountryCards"

const MainCountriesPage = ({countries}) => {
  return (
    <div>
        <ul className=" flex flex-wrap items-center justify-center gap-10 ">
          {countries.map((country) => (
            <CountryCards key={country.name.common} country={country}/>
          ))}
        </ul>
    </div>
  )
}

export default MainCountriesPage
