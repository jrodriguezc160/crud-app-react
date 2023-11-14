import React from 'react';
import { IconoCorazon, IconoCorazonFavoritos } from './Iconos';

const MoviesList = (props) => {
  return (
    <>
      <div
        style={{
          margin: '0',
          padding: '0',
          height: 'fit-content',
          top: '0',
          position: 'relative',
        }}
      >
        {props.lista === 'busqueda' ? (
          <p
            className="content"
            style={{ top: '5vh', position: 'relative', zIndex: '48' }}
          >
            Hay {props.movies.length} resultados:
          </p>
        ) : (
          <h2
            className="content"
            style={{ top: '5vh', position: 'relative', zIndex: '48' }}
          >
            FAVORITOS
          </h2>
        )}

        <div className="movies-container">
          <div className="margen-manual">&nbsp;</div>
          {props.movies.map((movie, index) => (
            <div className="movie-item" key={index}>
              <div className="ambilight">
                <div
                  className="me-gusta"
                  onClick={() => props.handleFavouritesClick(movie)}
                >
                  {props.lista === 'busqueda' ? (
                    <IconoCorazon ancho="16px" alto="16px" />
                  ) : (
                    <IconoCorazonFavoritos ancho="16px" alto="16px" />
                  )}
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
