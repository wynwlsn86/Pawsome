import React from 'react';
import AddPet from './components/AddPet/AddPet';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllPets from './components/AllPets/AllPets';


function App() {
  return (
    <div className="App">
      <Header />
      <AllPets />
      <AddPet />
      <Footer />
    </div>
  );
}

export default App;


