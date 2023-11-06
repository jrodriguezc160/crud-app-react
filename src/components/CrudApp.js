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

  return (
    <>
      <h3>CRUD APP</h3>
      <CrudForm />
      <CrudTable data={db} />
    </>
  );
};
