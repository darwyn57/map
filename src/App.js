import './App.css';
import React, { useState } from 'react'
import ReactDom from "react-dom/client";
import Testcompo from './Testcompo.js';

const empl = [
  { id: 1, name: 'Alex', genre: 'Masculin', typeContrat: 'cdd' },
  { id: 2, name: 'Alex', genre: 'Masculin', typeContrat: 'cd1' },
  { id: 3, name: 'Alex', genre: 'Masculin', typeContrat: 'cdi' },
]


function App() {

  const [employe, setEmploye] = useState(empl)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bonjours à tous</h1>
        <Testcompo list={employe} />

      </header>
    </div>
  );
}

export default App;
