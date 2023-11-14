import React, { useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import MovieListHeading from './MovieListHeading';
import MovieSearchBox from './MovieSearchBox';

const MoviesApp = () => {
  const [movies, setMovies] = useState([]);
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

  return (
    <>
      <div className="content">
        <div style={{ height: '50%', display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <MovieListHeading
              heading="MOVIES"
              body={
                <>
                  <p>
                    Haciendo peticiones a una API accedemos a una base de datos
                    de películas. De esta base de datos sacamos los posters de
                    las películas cuyo título coincide con la petición del
                    usuario.
                  </p>
                  <p>
                    Busca cualquier película y, si encuentras alguna que te
                    guste, haz click en el icono del corazón para añadirla a
                    favoritos.
                  </p>
                </>
              }
            />
          </div>
          <div style={{ width: '50%' }}>
            <MovieListHeading
              heading="&nbsp;"
              body={
                <>
                  {' '}

                </>
              }
            />
            <MovieSearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
        </div>
      </div>

      <div>
        <MoviesList movies={movies} />
      </div>
    </>
  );
};

export default MoviesApp;
