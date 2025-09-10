import { MovieCards } from "./components/MovieCards";
import "./components/MovieCards.css";

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">Best Movies List</h1>
      <MovieCards />
    </section>
  );
};
