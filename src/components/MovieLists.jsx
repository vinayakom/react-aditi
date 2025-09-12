import styles from "./MovieCards.module.css";
import styled from "styled-components";

export const MovieLists = ({ value }) => {

    const { movieImg_url, movieName, movieRating, movieGenre, movieDescription, movieCast, movieWatch_url } = value;

    // const ButtonMovie = styled.button({
    //     padding: "1.2rem 2.4rem",
    //     border: "none",
    //     fontSize: "1.6rem",
    //     backgroundColor: `${movieRating >= 7 ? "#7dcea0" : "#f7dc6f"}`,
    //     color: "var(--btn-color)",
    //     fontWeight: "bold",
    //     cursor: "pointer",
    // });

    //Below using Template Literals
    // const ButtonMovieTL = styled.button`
    //     padding: 1.2rem 2.4rem;
    //     border: none;
    //     font-size: 1.6rem;
    //     background-color: ${(props) => props.movieRating >= 7 ? "#7dcea0" : "#f7dc6f"};
    //     color: var(--btn-color);
    //     font-weight: bold;
    //     cursor: pointer;
    // `;

    const buttonStyle = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${movieRating >= 7 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",
    };

    const ratingClass = movieRating >= 7 ? styles["super-hit"] : styles.average;

    // const Rating = styled.h3`
    //     font-size = 1.6rem;
    //     color: #7dcea0;
    //     text-transform: capitalize;
    // `

    return (
        <li className={styles.card}>
            <div><img src={movieImg_url} alt={movieImg_url} height="40%" width="40%" /></div>
            <div className={styles["card-content"]}>
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
                    {/* <ButtonMovie>Watch Now</ButtonMovie> */}
                    {/* <ButtonMovieTL rating={movieRating}>Watch Now</ButtonMovieTL> */}
                </a>
            </div>
        </li>
    );
};