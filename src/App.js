import React from 'react';
import { CrudApp } from './components/CrudApp';
import NavBar from './components/NavBar';
import CrudAPI from './components/CrudAPI';
import SongSearch from './components/SongSearch';
import DarkTheme from './temaOscuro';

function App() {
  return (
    <>
      <NavBar />
      <DarkTheme btn=".dark-theme-btn" classDark="dark-mode" />
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
