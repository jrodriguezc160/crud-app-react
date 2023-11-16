import React from 'react';

const MovieSearchBox = (props) => {
  return (
    <div>
      <label>
        <input
          placeholder="ej. Avengers"
          value={props.value}
          onChange={(event) => {
            props.setSearchValue(event.target.value);
          }}
          className="input-con-icono"
        ></input>
      </label>
    </div>
  );
};

export default MovieSearchBox;
