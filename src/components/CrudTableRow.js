import React from 'react';
import IconoEliminar from './IconoEliminar';

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { title, director, id } = el;

  return (
    <tr>
      <td>{title}</td>
      <td>{director}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>
          <IconoEliminar ancho="16" alto="16" /> Eliminar
        </button>
      </td>
    </tr>
  );
};
