import React from 'react';
import IconoEliminar from './IconoEliminar';

export const CrudTableRow = ({ el }) => {
  return (
    <tr>
      <td>{el.title}</td>
      <td>{el.director}</td>
      <td>
        <button>Editar</button>
        <button><IconoEliminar ancho="16" alto="16" /> Eliminar</button>
      </td>
    </tr>
  );
};
