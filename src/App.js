import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <h2>Rules of the Game</h2>
        <option></option> <button>Random Cell</button> <button>Start</button> <button>Stop</button> <button>Clear</button>
        <h2>Generations: {'will be updated with running generation numbers'}</h2> 
      </div>
    );
  }
}

export default App;
