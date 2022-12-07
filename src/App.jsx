import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from '../Components/MovieList';
import MovieListHeading from '../Components/MovieListHeadig';
import SearchBox from '../Components/SearchBox';
import AddFavourite from '../Components/AddToFavourites';
import RemoveFavourites from '../Components/RemoveFavourite';

const App = () => {
  const [movies, setMovies] =useState([]);
  const [searchValue, setSearchValue ] = useState('');
  const [favourites, setFavourites] = useState([]);
  
  const getMovieRequest = async (searchValue)=> {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=90c6544c`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson)
    if (responseJson.Search) {
        setMovies(responseJson.Search);
    }
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movies];
    setFavourites(newFavouriteList);
  }

 


  useEffect  (() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect (() => {
    const movieFavourites = JSON.parse(
       localStorage.getItem('react-movie-app-favourites')
    );

    setFavourites(movieFavourites);
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-app-favourites', JSON.stringfy(items));
  }


  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);

    
    }

    
return (
  <div className='Container-fluid movie-app'>
    {/* <>{JSON.stringify(movies, null, 2)}</> */}
    <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favourites' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
    <div className='row'>
        <MovieList
         movies={movies} 
         favouriteComponent={AddFavourite }
         handleFavouriteClick={addFavouriteMovie}
         />

    </div>
    {/* <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading='Favourites' />
    </div>
    <div className='row'>
          <MovieList
          movies={favourites}
          handleFavouriteClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
          />
    </div> */}
  </div>
)
};


export default App;