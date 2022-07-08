import React, { useState, useEffect }  from 'react';
import logo from './assets/images/pint.svg';
import './assets/styles/App.css';
import Popup from './views/Popup';
import Options from './views/Options';

export default function App() {

  const [isOptionsUi, setOptionsUI] = useState(window.innerWidth > 375);

  const updateMedia = () => {
    setOptionsUI(window.innerWidth > 375);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="relative">
      {isOptionsUi ? 
      ( <Options/>
        ) : (
        <Popup />
      )}
    </div>
  );
}
