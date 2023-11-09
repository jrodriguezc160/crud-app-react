import React, { useState } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import { useEffect } from 'react';
import Loader from './Loader';
import Message from './Message';

const CrudAPI = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:5000/movies';

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      // console.log(res)
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    // console.log(endpoint);

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      '¿Estás seguro de eliminar el registro con el id "' + id + '"?'
    );

    if (isDelete) {
      let options = {
        headers: { 'content-type': 'application/json' },
      };

      let endpoint = `${url}/${id}`;
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD API</h2>
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
          {loading && <Loader />}
          {error && (
            <Message msg={`Error ${error.status}: ${error.statusText}`} />
          )}
          {db && (
            <CrudTable
              data={db}
              deleteData={deleteData}
              setDataToEdit={setDataToEdit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CrudAPI;
