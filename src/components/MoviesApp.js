import React, { useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import MovieListHeading from './MovieListHeading';
import MovieSearchBox from './MovieSearchBox';

const MoviesApp = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c003a867`;

    const response = await fetch(url);

    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  return (
    <>
      <div style={{ display: 'block', padding: '0' }}>
        <div className="content" style={{marginBottom:"0"}}>
          <MovieListHeading
            heading="MOVIES"
            body={
              <>
                <p>
                  Haciendo peticiones a una API accedemos a una base de datos de
                  películas. De esta base de datos sacamos los posters de las
                  películas cuyo título coincide con la petición del usuario.
                </p>
              </>
            }
          />
          <MovieSearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <MoviesList movies={movies} handleFavouritesClick={addFavouriteMovie} />
      </div>
    </>
  );
};

export default MoviesApp;
