import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
    <Header />
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
