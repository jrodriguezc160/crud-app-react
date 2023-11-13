import React, { useEffect, useState } from 'react';
import MoviesList from './MoviesList';

const MoviesApp = () => {
  const [movies, setMovies] = useState([
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      Year: '1977',
      imdbID: 'tt0076759',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      Year: '1980',
      imdbID: 'tt0080684',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      Year: '1983',
      imdbID: 'tt0086190',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
  ]);

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=c003a867';

    const response = await fetch(url);

    const responseJSON = await response.json();

    console.log(responseJSON);

    setMovies(responseJSON.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      <h2>MOVIES APP</h2>
      <p>
        Haciendo peticiones a una API accedemos a una base de datos de
        películas.
      </p>
      <p>
        De esta base de datos sacamos los posters de las películas cuyo título
        coincide con la petición del usuario.
      </p>

      <div>
        <MoviesList movies={movies} />
      </div>
    </>
  );
};

export default MoviesApp;
