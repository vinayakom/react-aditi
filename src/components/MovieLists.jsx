export const MovieLists = ({ value }) => {

    const { movieImg_url, movieName, movieRating, movieGenre, movieDescription, movieCast, movieWatch_url } = value;

    const buttonStyle = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: "var(--btn-hover-bg-color)",
        color: "var(--bg-color)",
    };

    return (
        <li className="card">
            <div><img src={movieImg_url} alt={movieImg_url} height="40%" width="40%" /></div>
            <div className="card-content">
                <h2>Name: {movieName}</h2>
                <h3>Ratings: {movieRating}</h3>
                <p>Summary: {movieDescription}</p>
                <p>Genre: {movieGenre.join(", ")}</p>
                <p>Cast: {movieCast.join(", ")}</p>
                <a href={movieWatch_url} target="_blank">
                    <button style={buttonStyle}>Watch Now</button>
                </a>
            </div>
        </li>
    );
};