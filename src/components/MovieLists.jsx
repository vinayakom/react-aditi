export const MovieLists = ({value}) => {

    const { movieImg_url, movieName, movieRating, movieGenre, movieDescription, movieCast, movieWatch_url } = value;

    return (
        <li>
            <div><img src={movieImg_url} alt={movieImg_url} height="40%" width="40%" /></div>
            <h2>Name: {movieName}</h2>
            <h3>Ratings: {movieRating}</h3>
            <p>Genre: {movieGenre}</p>
            <p>Summary: {movieDescription}</p>
            <p>Cast: {movieCast}</p>
            <a href={movieWatch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    );
};