import { useState } from 'react'
import SearchBar from "../SearchBar.jsx/SearchBar"
import CountryList from "../CountryList.jsx/CountryList"

const MainCountriesPage = ({countries}) => {
  const [query, setQuery ] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('none')

  const filterCountries = countries.filter(({ name, region }) => {
    const searchByName =
      query.length !== 0
        ? name.common.toLowerCase().includes(query.toLowerCase())
        : true;

    const selectRegion =
      selectedRegion !== "none" ? region.includes(selectedRegion) : true;
    return searchByName && selectRegion;
  });

  return (
    <div className='dark:bg-slate-800'>
      <SearchBar query={query} setQuery={setQuery} selectRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      {filterCountries.length === 0 ? (
        <p>No Country Found...</p>
      ) : (
        <ul className=" flex flex-wrap items-center justify-center gap-10 ">
          {filterCountries.map((country) => (
            <CountryList key={country.name.common} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MainCountriesPage
