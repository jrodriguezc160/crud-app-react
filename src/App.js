import React from 'react';
import { CrudApp } from './components/CrudApp';
import NavBar from './components/NavBar';
import CrudAPI from './components/CrudAPI';
import DarkTheme from './temaOscuro';
import MoviesApp from './components/MoviesApp';

function App() {
  return (
    <>
      <DarkTheme btn=".dark-theme-btn" classDark="dark-mode" />
      <div className="content-x-nomargin" style={{marginTop: "4vh"}}>
        <h1>Ejercicios con React</h1>
        <hr />
      </div>
      <MoviesApp />
      <div className="content">
        <br />
        <br />
        <hr />
        <br />
        <br />
        <CrudAPI />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <CrudApp />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
