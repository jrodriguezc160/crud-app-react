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

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    setFavourites(movieFavourites);
  });

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
      saveToLocalStorage(newFavouriteList);
    } else {
      // Si la película no es un favorito, la añadimos a la lista
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
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
          favourites={favourites}
        />
        <MoviesList
          movies={favourites}
          handleFavouritesClick={handleFavouritesClick}
          lista={'favoritos'}
          favourites={favourites}
        />
      </div>
    </>
  );
};

export default MoviesApp;
