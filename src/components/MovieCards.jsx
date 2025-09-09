import moviesData from "../api/moviesData.json";
import { MovieLists } from "./MovieLists";

export const MovieCards = () => {
  return (
    <ul>
      {moviesData.map((movie) => <MovieLists key={movie.movieId} value={movie} />)}
    </ul>
  );
};
