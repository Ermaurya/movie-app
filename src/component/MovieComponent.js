import React from "react";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
// console.log(props.movie)

  return (
    <div className='MovieContainer'
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {/* <MovieInfoComponent data={rating}/> */}
      <img  className='CoverImage' src={Poster} alt={Title} />
      <span className='MovieName'>{Title}</span>
      < div className='InfoColumn'>
      {/* <span> Rating : {imdbRating}</span> */}
      <span>Year : {Year}</span>
        <span>Type : {Type}</span>
      </div>
    </div>
  );
};
export default MovieComponent;
