import React, { useState } from "react";
import Axios from "axios";
import MovieComponent from "./component/MovieComponent";
import MovieInfoComponent from "./component/MovieInfoComponent";

export const API_KEY = "3733da0e";


function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
    // console.log(response.movie)
  };

  const onTextChange = (e) => {
    onMovieSelect("robot")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <>
    
    <div className='Home_Container'>
      
      <div className='Header'>
        <div className='AppName'>
          <img alt="" className='MovieImage' src="https://image.winudf.com/v2/image1/Y29tLmpvYnMubW92aWVzX3NjcmVlbl8wXzE1ODAzNDU2MjBfMDM4/screen-0.jpg?h=500&fakeurl=1&type=.jpg" />
          React Movie Hub
        </div>
        <div className='SearchBox'>
          <img alt='' className='SearchIcon' src="./search-icon.svg" />
          <input className='SearchInput' type='text'
            placeholder="Search By Movie Name"
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      </div>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <div className='MovieListContainer'>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect}/>
          ))
        ) : (
          <img alt="" className='Placeholder' src="http://store-images.s-microsoft.com/image/apps.57941.14532677366531339.56ab3d46-931e-4304-b34f-6da0536455a3.7e02e73c-1692-4872-97c8-622813b92a08" />
        )}
      </div>
    </div>
   
    </>
  );
}

export default App;
