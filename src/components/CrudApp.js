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

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      '¿Estás seguro de eliminar el registro con el id "' + id + '"?'
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h3>CRUD APP</h3>
      <br />
      <div className="contenedor-principal">
        <div className="contenedor-iz">
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </div>
        <div className="contenedor-de">
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          />
        </div>
      </div>
    </>
  );
};
