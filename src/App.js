import React from 'react';
import './App.css';
import StudentEdit from './components/StudentEdit';
import StudentData from './components/StudentData';
import Loader from './components/Loader';
import LibraryComponent from './components/LibraryComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader></Loader>
        <StudentEdit />

        <hr></hr>

        <StudentData></StudentData>

        <LibraryComponent></LibraryComponent>
      </header>
    </div>
  );
}

export default App;
