import React from 'react';
import './App.scss';

import Card from './Card';

import b from './combinations';


function App() {
  let urls = b("",2, 20, 30);
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
