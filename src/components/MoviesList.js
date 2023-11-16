/* La clave está en dónde colocas el MoviePoster
   también es importante saber utilizar los parámetros correspondientes
*/

import React, { useState } from 'react';
import { IconoCorazon, IconoMax } from './Iconos';
import MovieTrailer from './MovieTrailer';

const MoviesList = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMoviePoster, setSelectedMoviePoster] = useState(null);

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
          <div className="movie-item">
            <div className="ambilight">
              <div className="iconos">
                <div
                  className="me-gusta"
                  onClick={() => props.handleFavouritesClick(selectedMovie)}
                >
                  <IconoCorazon
                    ancho="16px"
                    alto="16px"
                    esFavorito={
                      props.favourites &&
                      props.favourites.some(
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
        </div>
      </div>
    );
  };

  // Poster
  const [modalPosterOpen, setModalPosterOpen] = useState(false);

  const openModalPoster = (movie, selectedMovie, modalOpen) => {
    !modalOpen
      ? setSelectedMoviePoster(movie)
      : setSelectedMoviePoster(selectedMovie);

    setModalPosterOpen(true);
  };

  const closeModalPoster = (movie) => {
    setModalPosterOpen(false);
    setSelectedMoviePoster(null);
  };

  // Movie Poster
  const moviePoster = () => {
    if (!selectedMoviePoster || !modalPosterOpen) return null;
    console.log('Abriendo poster...');

    return (
      <div
        className={`screen ${modalPosterOpen ? 'visible' : ''}`}
        onClick={closeModalPoster}
      >
        <div className="ambilight-modal" onClick={(e) => e.stopPropagation()}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMoviePoster.poster_path}`}
            alt="Displayed first"
            className="image"
          />
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMoviePoster.poster_path}`}
            alt="Ambilight effect"
            className="light"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {movieInfo()}
      {moviePoster()}

      <div
        style={{
          margin: '0',
          padding: '0',
          height: '400px',
          top: '0',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {props.lista === 'busqueda' ? (
          <p
            className="content"
            style={{
              top: '0',
              position: 'relative',
              zIndex: '15',
              padding: '0',
              marginTop: "0"
            }}
          >
            Hay {props.movies.length} resultados:
          </p>
        ) : (
          <h2
            className="content"
            style={{ top: '3vh', position: 'relative', zIndex: '15' }}
          >
            Favoritos
          </h2>
        )}

        <div className="movies-container" style={{ margin: '0', padding: '0' }}>
          <div className="margen-manual">&nbsp;</div>
          {!props.movies || props.movies.length === 0 ? (
            <div
              style={{
                position: 'relative',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p>¡Vaya! Parece que no hay nada por aquí...</p>
            </div>
          ) : (
            props.movies &&
            props.movies.map((movie, index) => (
              <div className="movie-item" key={index}>
                <div className="iconos">
                  <div
                    className="me-gusta"
                    onClick={() => props.handleFavouritesClick(movie)}
                  >
                    <IconoCorazon
                      ancho="16px"
                      alto="16px"
                      esFavorito={
                        props.favourites &&
                        props.favourites.some(
                          (favourite) => favourite.id === movie.id
                        )
                      }
                    />
                  </div>
                  <div
                    className="ver-info"
                    onClick={() => openModalPoster(movie)}
                  >
                    <IconoMax ancho="16px" alto="16px" />
                  </div>
                </div>
                <div className="ambilight" onClick={() => openModal(movie)}>
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
