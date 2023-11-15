import React from 'react';
import { IconoCorazon, IconoMax } from './Iconos';

const MoviesList = (props) => {
  const movieInfo = (movie) => {
    console.log('CLICK');
    return (
      <div className="screen">
        <div className="modal">
          <div className="modal-img">
            <img src={movie.Poster} alt="Displayed first" className="image" />
            <img src={movie.Poster} alt="Ambilight effect" className="light" />
          </div>
          <div className="modal-info">
            <h2>{movie.title}</h2>
            <h4>{movie.director}</h4>
            <p>
              {movie.year} · {movie.actors} · IMDB id: {movie.imdbID}
            </p>
            <p>{movie.synopsis}</p>
          </div>
        </div>
      </div>
    );
  };

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
          {props.movies.length === 0 ? (
            <img
              alt="Imagen vacío"
              style={{ width: 'auto', height: '100%', margin: 'auto' }}
              src="/no-content.png"
            />
          ) : (
            props.movies.map((movie, index) => (
              <div
                className="movie-item"
                key={index}
                onClick={() => movieInfo(movie)}
              >
                <div className="ambilight">
                  <div className="iconos">
                    <div
                      className="me-gusta"
                      onClick={() => props.handleFavouritesClick(movie)}
                    >
                      <IconoCorazon
                        ancho="16px"
                        alto="16px"
                        esFavorito={props.favourites.some(
                          (favourite) => favourite.imdbID === movie.imdbID
                        )}
                      />
                    </div>
                    <div
                      className="ver-info"
                      onClick={() => movieInfo(movie)}
                    >
                      <IconoMax ancho="16px" alto="16px" />
                    </div>
                  </div>
                  <img
                    src={movie.Poster}
                    alt="Displayed first"
                    className="image"
                  />
                  <img
                    src={movie.Poster}
                    alt="Ambilight effect"
                    className="light"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
