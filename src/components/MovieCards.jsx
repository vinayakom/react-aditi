import moviesData from "../api/moviesData.json";

export const MovieCards = () => {
  return (
    <ul>
      {
        moviesData.map((movie) => {
          return (
            <li key={movie.movieId}>
              <div><img src={movie.movieImg_url} alt={movie.movieImg_url} height="40%" width="40%" /></div>
            <h2>Name: {movie.movieName}</h2>
            <h3>Ratings: {movie.movieRating}</h3>
            <p>Genre: {movie.movieGenre}</p>
            <p>Summary: {movie.movieDescription}</p>        
            <p>Cast: {movie.movieCast}</p>        
            <a href={movie.movieWatch_url} target="_blank">
                <button>Watch Now</button>
            </a>        
            </li>
          )
        })
      }
    </ul>
  );
};
