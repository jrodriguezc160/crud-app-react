import React, { useState } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';

const initialDb = [
  {
    id: 1,
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
  },
  {
    id: 2,
    title: 'Rumble Fish',
    director: 'F. Ford Copolla',
  },
  {
    id: 3,
    title: 'Raging Bull',
    director: 'Scorsese',
  },
  {
    id: 4,
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
  },
  {
    id: 5,
    title: 'Interstellar',
    director: 'Christopher Nolan',
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {};

  const updateData = (data) => {};

  const deleteData = (data) => {};

  return (
    <>
      <h3>CRUD APP</h3>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </>
  );
};
