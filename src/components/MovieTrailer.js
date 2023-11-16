import React, { useState, useEffect } from 'react';

const MovieTrailer = (props) => {
  const [youtubeLink, setYoutubeLink] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmRiY2QzMzRiYWI5MjViMjg5MTEwNDY1YTg4MDZkNiIsInN1YiI6IjY1NGRmM2I0NDFhNTYxMzM2YzVmYjU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HY7VrsbpUBeQtEhGzZC1NYNRrU29_KsLVW-NmyH_8EU',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${props.movieID}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const videos = data.results;

        // Filtramos los vídeos para encontrar un tráiler
        const trailerOficial = videos.find(
          (video) => video.type === 'Trailer' && video.official === true
        );

        if (trailerOficial) {
          setYoutubeLink(
            `https://www.youtube.com/watch?v=${trailerOficial.key}`
          );
        }
      })
      .catch((err) => console.error(err));
  }, [props.movieID]);

  return (
    <>
      {youtubeLink ? (
        <a href={youtubeLink} target='blank'>
          <button>Ver tráiler</button>
        </a>
      ) : (
        <p>
          <i>No se encontró un trailer oficial</i>
        </p>
      )}
    </>
  );
};

export default MovieTrailer;
