import React from 'react';
import { CrudTableRow } from './CrudTableRow';

export const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Director</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td></td>
              <td>Sin datos</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
