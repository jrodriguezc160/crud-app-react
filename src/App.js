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
        <br />
        <hr />
        <br />
        <CrudAPI />
        <br />
        <hr />
        <br />
        <CrudApp />
        <br />
      </div>
    </>
  );
}

export default App;
