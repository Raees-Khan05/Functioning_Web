
import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input 
    className='input__search'
      type="text"
      placeholder="Search Products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
