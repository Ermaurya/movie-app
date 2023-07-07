import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  // console.log(setMovieInfo(response.data))
  // props.data(selectedMovie)
  return (
    <div className='Container1'>
      {movieInfo ? (
        <>
        <div className='Movie_box'>
          <img className='CoverImage' src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <div className='InfoColumn1'>
            <div className='MovieName'>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </div>
            <div className='MovieInfo'>
             Rating: <span>{movieInfo?.imdbRating}</span>
             {/* console.log(movieInfo?.imdbRating) */}
            
            </div>
            <div className='MovieInfo'>
              Year: <span>{movieInfo?.Year}</span>
            </div>
            <div className='MovieInfo'>
              Language: <span>{movieInfo?.Language}</span>
            </div>
            <div className='MovieInfo'>
              Rated: <span>{movieInfo?.Rated}</span>
              </div>
            <div className='MovieInfo'>
              Released: <span>{movieInfo?.Released}</span>
              </div>
            <div className='MovieInfo'>
              Runtime: <span>{movieInfo?.Runtime}</span>
              </div>
            <div className='MovieInfo'>
              Genre: <span>{movieInfo?.Genre}</span>
              </div>
            <div className='MovieInfo'>
              Director: <span>{movieInfo?.Director}</span>
              </div>
            <div className='MovieInfo'>
              Actors: <span>{movieInfo?.Actors}</span>
              </div>
            <div className='MovieInfo'>
              Plot: <span>{movieInfo?.Plot}</span>
              </div>
          </div>
          <div className="close" >
            <span onClick={() => props.onMovieSelect()}>X</span>
            </div>
            </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default MovieInfoComponent;
