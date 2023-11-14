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

/* Métodos originales para el manejo del click en los elementos:

  const addFavouriteMovie = (movie) => {
    const isDuplicate = favourites.some(
      (favouriteMovie) => favouriteMovie.imdbID === movie.imdbID
    );

    if (!isDuplicate) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
  }; */

  const handleFavouritesClick = (movie) => {
    // Verifica si la película ya está en la lista de favoritos
    const isFavorite = favourites.some(
      (favoriteMovie) => favoriteMovie.imdbID === movie.imdbID
    );

    if (isFavorite) {
      // Si la película ya es un favorito, la eliminamos de la lista
      const newFavouriteList = favourites.filter(
        (favorite) => favorite.imdbID !== movie.imdbID
      );
      setFavourites(newFavouriteList);
    } else {
      // Si la película no es un favorito, la añadimos a la lista
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
    }
  };

  return (
    <>
      <div style={{ display: 'block', padding: '0' }}>
        <div
          className="content"
          style={{ marginBottom: '0', paddingBottom: '0' }}
        >
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
        <MoviesList
          movies={movies}
          handleFavouritesClick={handleFavouritesClick}
          lista={'busqueda'}
        />
        <MoviesList
          movies={favourites}
          handleFavouritesClick={handleFavouritesClick}
          lista={'favoritos'}
        />
      </div>
    </>
  );
};

export default MoviesApp;
