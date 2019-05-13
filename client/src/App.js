import React from 'react';
import AddPet from './components/AddPet/AddPet'
import './App.css';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
    <h1>PAWSOME</h1>
    <Header />
    <AddPet />
    </div>
  );
}

export default App;
