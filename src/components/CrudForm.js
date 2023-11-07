import React, { useState, useEffect } from 'react';

const initialForm = {
  title: '',
  director: '',
  id: null,
};

export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.director) {
      alert('Datos incompletos');
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          onChange={handleChange}
          value={form.title}
        />
        <br />
        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleChange}
          value={form.director}
        />
        <br />
        <input type="submit" value="Enviar" id="enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} className='margin-left'/>
      </form>
    </div>
  );
};
