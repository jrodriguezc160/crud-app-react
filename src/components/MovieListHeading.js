import React from 'react';

const MovieListHeading = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <p>
        Haciendo peticiones a una API accedemos a una base de datos de
        películas.
      </p>
      <p>
        De esta base de datos sacamos los posters de las películas cuyo título
        coincide con la petición del usuario.
      </p>
    </div>
  );
};

export default MovieListHeading;
