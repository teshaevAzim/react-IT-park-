import React from 'react';
import { useState } from 'react';

const Search = ({searchMovie}) => {
    const [search, setSearch] = useState()
    const handleSearch = (e) => {
        if(e.key === "Enter") {
            searchMovie(search)
        }
    }
  return <div>
      <div className="search">
        <input type="text" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearch} />
        <button onClick={() => searchMovie(search)}>Search</button>
      </div>
  </div>;
};

export default Search;
