import styles from "./MovieCards.module.css";

export const MovieLists = ({ value }) => {

    const { movieImg_url, movieName, movieRating, movieGenre, movieDescription, movieCast, movieWatch_url } = value;

    const buttonStyle = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${movieRating >= 7 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",
    };

    const ratingClass = movieRating >= 7 ? styles.average : styles.average;

    return (
        <li className={styles.card}>
            <div><img src={movieImg_url} alt={movieImg_url} height="40%" width="40%" /></div>
            <div className="cardContent">
                <h2>Name: {movieName}</h2>
                <h3>
                    Rating:
                    <span className={`${styles.rating} ${ratingClass}`}>
                        {movieRating}
                    </span>
                </h3>
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