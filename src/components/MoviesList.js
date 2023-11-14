import React from 'react';
import { IconoCorazon } from './Iconos';

const MoviesList = (props) => {
  return (
    <>
      <div className="movies-container">
        <div className="margen-manual">&nbsp;</div>
        {props.movies.map((movie, index) => (
          <div className="movie-item" key={index}>
            <div className="ambilight">
              <div className="me-gusta" onClick={IconoCorazon}>
                <IconoCorazon ancho="16px" alto="16px" />
              </div>
              <img src={movie.Poster} alt="Image1" className="image" />
              <img src={movie.Poster} alt="" className="light" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesList;