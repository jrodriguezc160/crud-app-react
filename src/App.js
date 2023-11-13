import React from 'react';
import { CrudApp } from './components/CrudApp';
import NavBar from './components/NavBar';
import CrudAPI from './components/CrudAPI';
import DarkTheme from './temaOscuro';
import MoviesApp from './components/MoviesApp';

function App() {
  return (
    <>
      <NavBar />
      <DarkTheme btn=".dark-theme-btn" classDark="dark-mode" />
      <div className="content">
        <h1>Ejercicios con React</h1>
        <hr />
        <br />
        <br />
        <MoviesApp />
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
