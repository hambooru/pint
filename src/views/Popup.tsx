import React from 'react';
import '../assets/styles/App.css';
import QuickChange from '../components/popup/QuickChange';
import Header from '../components/popup/Header';
import Samples from '../components/popup/Samples';

function Popup() {
  return (
    <div className="relative">
      <Header/>
      <Samples />
      <QuickChange/>
    </div>
  );
}

export default Popup;
