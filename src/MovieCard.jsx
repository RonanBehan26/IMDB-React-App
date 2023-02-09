//why jsx - jsx extension is preferable when you create a new component
//pretty much same as a .js
//going to pass the movie1 over through props
//dynamically looping over an array of movies which we are taking from an api

import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
      <div className="movie" key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>
  
        <div>
          <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        </div>
  
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    );
  }
  
  export default MovieCard;