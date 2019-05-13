import React from 'react';
import AddPet from './components/AddPet/AddPet'
import './App.css';
import AllPets from './components/AllPets/AllPets';

function App() {
  return (
    <div className="App">
    <h1>PAWSOME</h1>
    <AllPets />
    <AddPet />
    </div>
  );
}

export default App;


