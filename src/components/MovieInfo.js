import React from 'react';
import MovieTrailer from './MovieTrailer';
import { IconoCerrar, IconoCorazon, IconoMax } from './Iconos';

const MovieInfo = ({
  selectedMovie,
  modalOpen,
  favourites,
  handleFavouritesClick,
  closeModal,
  openModalPoster,
}) => {
  if (!selectedMovie || !modalOpen) return null;
  console.log('Abriendo la información de la película...');

  return (
    <div
      className={`screen ${modalOpen ? 'visible' : ''}`}
      onClick={() => closeModal()}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="movie-item">
          <div className="ambilight">
            <div className="iconos">
              <div
                className="me-gusta"
                onClick={() => handleFavouritesClick(selectedMovie)}
              >
                <IconoCorazon
                  ancho="16px"
                  alto="16px"
                  esFavorito={
                    favourites &&
                    favourites.some(
                      (favourite) => favourite.id === selectedMovie.id
                    )
                  }
                />
              </div>
              <div
                className="ver-info"
                onClick={() => openModalPoster(selectedMovie)}
              >
                <IconoMax ancho="16px" alto="16px" />
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt="Displayed first"
              className="image"
            />
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt="Ambilight effect"
              className="light"
            />
          </div>
        </div>
        <div className="modal-info">
          <h2 style={{ top: '0' }}>{selectedMovie.title}</h2>
          <p>
            <i>{selectedMovie.original_title}</i> ·{' '}
            {selectedMovie.release_date.slice(0, 4)}
          </p>
          <p>{selectedMovie.overview}</p>
          <MovieTrailer movieID={selectedMovie.id} />
        </div>
        <div className="cerrar-modal" onClick={() => closeModal()}>
          <IconoCerrar ancho="16px" alto="16px" />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
