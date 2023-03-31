import { BsSearch } from 'react-icons/bs'

const SearchBar = ({ query, setQuery, selectedRegion, setSelectedRegion}) => {

  const handleQueryChange = e => setQuery(e.target.value)
  const handleSelectChange = e => setSelectedRegion(e.target.value)


    return (
      <div className="flex items-center justify-between m-6">
        <div className="px-4 relative">
          <span>
            <BsSearch className="absolute m-1" />
          </span>
          <input
            placeholder="Search for a country..."
            className=" border-2 text-center  rounded"
            type="search"
            onChange={handleQueryChange}
            value={query}
          />
        </div>
        <div>
        <select
              value={selectedRegion}
              onChange={handleSelectChange}
            >
              <option value="none" >
                Select a region
              </option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Oceania">Oceania</option>
            </select>
        </div>
      </div>
    );
}

export default SearchBar
