import React, { useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import MovieListHeading from './MovieListHeading';
import MovieSearchBox from './MovieSearchBox';

const MoviesApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=c003a867`;

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
      <div className="content">
        <MovieListHeading heading="MOVIES" />
        <MovieSearchBox />
      </div>

      <div>
        <MoviesList movies={movies} />
      </div>
    </>
  );
};

export default MoviesApp;
