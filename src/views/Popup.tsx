import React from "react";
import "../assets/styles/App.css";
import QuickChange from "../components/popup/QuickChange";
import Header from "../components/popup/Header";

import QuickSettings from "../components/popup/QuickSettings";

function Popup() {
  return (
    <div className="relative text-center">
      <Header />
      <QuickSettings />
      <QuickChange />
    </div>
  );
}

export default Popup;
