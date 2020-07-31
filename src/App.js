import React from 'react';
import './App.scss';

import Card from './Card';

import b from './combinations';


function App() {
  let urls = b("",1, []);
  return (
    <div className="App">
      <h1>Web Index</h1>
      <hr></hr>
      <ul>
        {
          urls.map((val, index) => <Card key={index} text={val} />)
        }
      </ul>
    </div>
  );
}

export default App;
