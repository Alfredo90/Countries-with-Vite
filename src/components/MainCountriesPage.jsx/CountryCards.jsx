
const CountryCards = ({country}) => {
  console.log(country.flag)
  return (
    <li className=" shadow-2xl rounded-md border-black w-64 h-80 mt-10 ">
      <img className="w-64 h-36 object-fill rounded-sm shadow-sm" src ={country.flags.png} alt={country.flags.alt}/>
    <div className="text-xl font-bold mt-4 ml-4" >
      <h1>{country.name.common}</h1>
    </div>
    <div className="text-sm mt-4 ml-4">
      <h3><strong>Population</strong>: {country.population.toLocaleString("en-US")}</h3>
      <h3><strong>Region</strong>: {country.region}</h3>
      <h3><strong>Capital</strong>: {country.capital}</h3>
    </div>
    </li>
  )
}

export default CountryCards
