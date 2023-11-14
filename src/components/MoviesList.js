import React from 'react';
import { IconoCorazon } from './Iconos';

const MoviesList = (props) => {
  return (
    <>
      <div style={{ margin: '0', padding: '0' }}>
        <p
          className="content"
          style={{ top: '5vh', position: 'relative', zIndex: '48' }}
        >
          Hay {props.movies.length} resultados:
        </p>
        <div className="movies-container">
          <div className="margen-manual">&nbsp;</div>
          {props.movies.map((movie, index) => (
            <div className="movie-item" key={index}>
              <div className="ambilight">
                <div
                  className="me-gusta"
                  onClick={() => props.handleFavouritesClick(movie)}
                >
                  <IconoCorazon ancho="16px" alto="16px" />
                </div>
                <img src={movie.Poster} alt="Image1" className="image" />
                <img src={movie.Poster} alt="" className="light" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
