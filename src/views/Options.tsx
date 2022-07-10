import React from 'react';
import '../assets/styles/App.css';
import Header from '../components/options/Header';
import QuickChange from '../components/popup/QuickChange';
import QuickSettings from '../components/popup/QuickSettings';

export default function Options() {
  return (
      <div className="flex flex-col align justify-center items-center">
        <div className="relative max-w-7xl flex flex-row">
          <div className="w-[375px]">
          <Header/>
          <QuickSettings/>
          </div>
          <div className="flex-grow">
            <QuickChange/>
          </div>
        </div>
      </div>
  );
}
