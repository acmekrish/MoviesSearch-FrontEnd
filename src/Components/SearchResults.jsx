import styled from "styled-components";

const StyledMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledMovieItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
function SearchResults({ movies, onMovieClick }) {
  console.log("movies prop:", movies); // Log the movies prop to inspect its value

  if (!movies) {
    return <p>Loading...</p>; // Handle case where data is not yet available
  }
  return (
    <StyledMovieList>
      {movies?.map((movie) => (
        <StyledMovieItem key={movie.imdbID}>
          <img src={movie.poster} alt={movie.title} />
          <span onClick={() => onMovieClick(movie.imdbID)}>
            {movie.title} ({movie.year})
          </span>
        </StyledMovieItem>
      ))}
    </StyledMovieList>
  );
}

export default SearchResults;
