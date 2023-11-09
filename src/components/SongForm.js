import React, { useState } from 'react';

const initialForm = {
  artist: '',
  song: '',
};

const SongForm = ({ handleSearch }) => {
  const [form, setform] = useState(initialForm);

  const handleChange = (e) => {};

  return (
    <div>
      <form>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <br />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          onChange={handleChange}
          value={form.song}
        />
        <br />
        <button type="submit" className="btn-verde">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default SongForm;
