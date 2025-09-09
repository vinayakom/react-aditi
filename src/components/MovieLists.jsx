export const MovieLists = (movieProps) => {

    return (
        <li>
            <div><img src={movieProps.value.movieImg_url} alt={movieProps.value.movieImg_url} height="40%" width="40%" /></div>
            <h2>Name: {movieProps.value.movieName}</h2>
            <h3>Ratings: {movieProps.value.movieRating}</h3>
            <p>Genre: {movieProps.value.movieGenre}</p>
            <p>Summary: {movieProps.value.movieDescription}</p>
            <p>Cast: {movieProps.value.movieCast}</p>
            <a href={movieProps.value.movieWatch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    );
};