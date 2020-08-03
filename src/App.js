import React from 'react';
import './App.scss';

import Card from './Card';


function App() {
  let urls = '';
  return (
    <div className="App">
      <h1>Web Index</h1>
      <hr></hr>
      <ul>
        {
          console.log(urls)
        }
      </ul>
    </div>
  );
}

export default App;
