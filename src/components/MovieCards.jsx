const MovieCards = () => {

  const movieName = "Saiyaara";
  const movieRating = "6.4";
  const movieSummary = "Vaani and Krish will have to navigate life, their problems, their insecurities to hopefully realise that only love can be the answer to everything.";

  const movieGenre = () => {
    const genre = "Romance";
    return genre;
  };

  let age = 19;
  // let isAbleToWatch = "Not Available";
  // if(age >= 18) isAbleToWatch = "Watch Now";  

  const isAbleToWatch = () => {
    if(age >= 18) return "Watch Now";  
    return "Not Available";
  };

  return (
    <div>
        <div><img src="saiyaara.jpg" alt="saiyaara.jpg" height="40%" width="40%" /></div>
        <h2>Name: {movieName}</h2>
        <h3>Ratings: {movieRating}</h3>
        <p>Genre: {movieGenre()}</p>
        <p>Summary: {movieSummary}</p>        
        {/* <button> {age >= 18 ? "Watch Now" : "Not Available"} </button> */}
        <button>{isAbleToWatch()}</button>
    </div>
  );
};

export default MovieCards;
