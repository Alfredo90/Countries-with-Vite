import CountryCards from "./CountryCards"

const MainCountriesPage = ({countries}) => {
  console.log(countries)
  return (
    <div>
        <ul>
          {countries.map(({country}) => (
            <CountryCards country={country}/>
          ))}
        </ul>
    </div>
  )
}

export default MainCountriesPage
