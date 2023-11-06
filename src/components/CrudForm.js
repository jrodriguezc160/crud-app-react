import React, { useState, useEffect } from 'react';

export const CrudForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};
  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          onChange={handleChange}
          value={form.title}
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleChange}
          value={form.director}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" />
      </form>
    </div>
  );
};
