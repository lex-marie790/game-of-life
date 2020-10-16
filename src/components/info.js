import React from 'react';

function Info() {
    return (
      <div className='info'>
        <h1>Game of Life - By John Conway</h1>
        <h3>About John</h3>
        <p>A bunch of info</p>
        <h3>Rules</h3>
        <p>1. cells are alive if they have 2 or 3 neighbors. Anything else means they are dead</p>
        <p>2. If the cell is dead, but has exactly 3 neighbors, the cell comes back to life.</p>
      </div>
    );
  }
  
  export default Info;