import moviesData from "../api/moviesData.json";
import { MovieLists } from "./MovieLists";

export const MovieCards = () => {
  return (
    <ul>
      {
        moviesData.map((movie) => {
          return (<MovieLists movie={movie} key={movie.movieId} />);
        })
      }
    </ul>
  );
};
