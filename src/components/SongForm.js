import React, { useState } from 'react';

const initialForm = {
  artist: '',
  song: '',
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert('Datos incompletos');
      return;
    } else {
      handleSearch(form);
      setForm(initialForm);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
