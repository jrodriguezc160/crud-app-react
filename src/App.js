import React from 'react';
import { CrudApp } from './components/CrudApp';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <h1>Ejercicios con React</h1>
        <CrudApp />
      </div>
    </>
  );
}

export default App;
