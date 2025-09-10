import moviesData from "../api/moviesData.json";
import { MovieLists } from "./MovieLists";

export const MovieCards = () => {
  return (
    <ul className="grid grid-three--cols">
      {moviesData.map((movie) => <MovieLists key={movie.movieId} value={movie} />)}
    </ul>
  );
};
