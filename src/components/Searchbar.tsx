import { useState } from 'react'
import { api } from '../api/hive-api'
const SearchBar = () => {
    const [searchText, setSearchText] = useState("")
   const handleSearch = async () => {
        if (searchText.trim().length > 0) {
            const data = await api.getAccount(searchText);
            console.log({
              name: data[0].name
            })
            
        }

   }
  return (
    <>
    <div data-testid='search-bar'>
        <input type="text" data-testid='search-text' placeholder="Search Users..." value={searchText} onChange={e => setSearchText(e.target.value)}/>
        <button data-testid='search-button' onClick={handleSearch}>search</button>
    </div>
    </>
  )
}

export default SearchBar