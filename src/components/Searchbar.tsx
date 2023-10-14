import { useState } from 'react'
const SearchBar = () => {
    const [searchText, setSearchText] = useState("")
//    const handleSearch = () => {
//         console.log('searching')
//    }
  return (
    <>
    <div data-testid='search-bar'>
        <input type="text" data-testid='search-text' placeholder="Search Users..." value={searchText} onChange={e => setSearchText(e.target.value)}/>
        <button data-testid='search-button'>search</button>
    </div>
    </>
  )
}

export default SearchBar