import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios library
import SearchHistory from "./Components/SearchHistory";
import SearchInput from "./Components/SearchInput";
import SearchResults from "./Components/SearchResults";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("searchHistory") || "[]"
    );
    console.log(storedHistory, "store");
    setSearchHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    try {
      const response = await axios.get(
        `http://localhost:5226/api/moviesearch?title=${query}`
      );
      setSearchResults(response?.data);

      // Add search query to searchHistory after API call
      setSearchHistory([...searchHistory, query]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovieClick = (movieId) => {
    // Fetch detailed movie information using movieId
    setSelectedMovie(searchResults.find((movie) => movie.imdbID === movieId));
  };

  const handleSearchHistoryClick = (query) => {
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div className="App">
      <SearchInput onSearch={handleSearch} />
      <SearchResults movies={searchResults} onMovieClick={handleMovieClick} />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <SearchHistory
        searchHistory={searchHistory}
        onSearch={handleSearchHistoryClick}
      />
    </div>
  );
}

export default App;
