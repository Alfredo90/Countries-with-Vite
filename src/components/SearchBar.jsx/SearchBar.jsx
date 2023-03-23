import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
    
    return (
        <div className='flex items-center justify-between m-6'>
            <div className='px-4 relative'>
                    <BsSearch className='absolute m-1' />
                    <input placeholder='Search for a country...' className=' border-2 text-center  rounded' type="search" />
            </div>
            <div>
                <select name='Filter By Region'>
                    <option disabled selected hidden>Filter By Region</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar