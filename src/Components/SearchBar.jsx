import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" name="search" placeholder="Search for movies" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
