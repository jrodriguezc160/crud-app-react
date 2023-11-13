import React from 'react';

const MoviesList = (props) => {
  return (
    <div className="movies-container">
      <div className="margen-manual">&nbsp;</div>
      {props.movies.map((movie, index) => (
        <div className="movie-item">
          <div class="ambilight">
            <img src={movie.Poster} alt="Image1" className="image" />
            <img src={movie.Poster} alt="" className="light" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
