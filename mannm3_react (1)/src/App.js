import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreatePage';
import EditExercisePage from './pages/EditPage';
import { useState } from 'react'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={ setExerciseToEdit } />
          </Route>
          <Route path="/CreatePage">
            <CreateExercisePage />
          </Route>
          <Route path="/EditPage">
            <EditExercisePage exerciseToEdit={ exerciseToEdit } />
          </Route>
          </div>
      </Router>
    </div> 
  );
}

export default App;