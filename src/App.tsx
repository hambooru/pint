import React from 'react';
import logo from './assets/images/pint.svg';
import './assets/styles/App.css';
import AccentChange from './components/AccentChange';
import BackgroundChange from './components/BackgroundChange';
import Header from './components/Header';
import Samples from './components/Samples';

function App() {
  return (
    <div className="relative">
      <Header/>
      <Samples />
      <AccentChange/>
      <BackgroundChange/>
    </div>
  );
}

export default App;
