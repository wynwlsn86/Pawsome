import React from 'react';
import AddPet from './components/AddPet/AddPet';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
    <h1>PAWSOME</h1>
    <Header />
    <AddPet />
    <Main />
    <Footer />
    </div>
  );
}

export default App;
