function MovieDetails({ movie }) {
  if (!movie) return null;

  return (
    <div>
      <h2>
        {movie.title} ({movie.year})
      </h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.plot}</p>
      {/* ... other movie details */}
    </div>
  );
}
export default MovieDetails;
