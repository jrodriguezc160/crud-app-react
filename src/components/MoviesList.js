import React, { Component } from 'react';

const MoviesList = (props) => {
  return (
    <div className="movies-container">
      {props.movies.map((movie, index) => (
        <div className="movie-item">
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
