import React, { useState } from 'react';
import { IconoCorazon, IconoMax } from './Iconos';

const MoviesList = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = (movie) => {
    setModalOpen(false);
    setSelectedMovie(null);
  };

  // Movie Info
  const movieInfo = () => {
    if (!selectedMovie || !modalOpen) return null;
    console.log('CLICK');

    return (
      <div
        className={`screen ${modalOpen ? 'visible' : ''}`}
        onClick={closeModal}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-info">
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {movieInfo()}

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
              <div className="movie-item" key={index}>
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
                          (favourite) => favourite.id === movie.id
                        )}
                      />
                    </div>
                    <div className="ver-info" onClick={() => openModal(movie)}>
                      <IconoMax ancho="16px" alto="16px" />
                    </div>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="Displayed first"
                    className="image"
                  />
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
