import React, { useState } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
import helpHttp from '../helpers/helpHttp';
import { useEffect } from 'react';

export const CrudAPI = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp();
  let url = 'http://localhost:5000/movies';

  useEffect(() => {
    api.get(url).then((res) => {
      // console.log(res)
      if (!res.err) {
        setDb(res);
      } else {
        setDb(null);
      }
    });
  }, []);

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
      <h3>CRUD API</h3>
      <p>Carga de la base de datos llamando a una API falsa (usando JSON)</p>
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
