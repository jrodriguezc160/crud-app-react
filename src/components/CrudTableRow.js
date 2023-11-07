import React from 'react';
import { IconoEliminar, IconoEditar } from './Iconos';

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { title, director, id } = el;

  return (
    <tr>
      <td>{title}</td>
      <td>{director}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>
          <IconoEditar ancho="16" alto="16" />
          Editar
        </button>
        <button id="eliminar" onClick={() => deleteData(id)}>
          <IconoEliminar ancho="16" alto="16" /> Eliminar
        </button>
      </td>
    </tr>
  );
};
