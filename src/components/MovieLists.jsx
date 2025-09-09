export const MovieLists = (movieProps) => {
    
    return (
        <li>
            <div><img src={movieProps.movie.movieImg_url} alt={movieProps.movie.movieImg_url} height="40%" width="40%" /></div>
            <h2>Name: {movieProps.movie.movieName}</h2>
            <h3>Ratings: {movieProps.movie.movieRating}</h3>
            <p>Genre: {movieProps.movie.movieGenre}</p>
            <p>Summary: {movieProps.movie.movieDescription}</p>
            <p>Cast: {movieProps.movie.movieCast}</p>
            <a href={movieProps.movie.movieWatch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    );
};