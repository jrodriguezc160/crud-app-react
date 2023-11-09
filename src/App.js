import React from 'react';
import { CrudApp } from './components/CrudApp';
import NavBar from './components/NavBar';
import CrudAPI from './components/CrudAPI';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <h1>Ejercicios con React</h1>
        <hr />
        <br />
        <SongSearch />
        <hr />
        <br />
        <CrudAPI />
        <hr />
        <br />
        <CrudApp />
      </div>
    </>
  );
}

export default App;
