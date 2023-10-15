import { useState } from 'react'
import { api } from '../api/hive-api'
import { ExtendedAccount } from '@hiveio/dhive';
const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [dataUser, setDataUser] = useState<ExtendedAccount|undefined>(undefined);
    const [error, setError] = useState('');

   const handleSearch = async () => {
        if (searchText.trim().length > 0) {
          try {
            const data = await api.getAccount(searchText);
            setDataUser(data[0]);
          } catch (error) {
            setError((error as Error).message);
          }
            
        }

   }
  return (
    <>
    <div data-testid='search-bar'>
        <input type="text" data-testid='search-text' placeholder="Search Users..." value={searchText} onChange={e => setSearchText(e.target.value)}/>
        <button data-testid='search-button' onClick={handleSearch}>search</button>
    </div>
    {
      dataUser &&
      <div>
      <h3 data-testid='data-username'>{dataUser.name}</h3>
    </div>
    }

    {error && <div>{error}</div>}
    
    </>
  )
}

export default SearchBar