import React from "react";
import "../assets/styles/App.css";
import QuickChange from "../components/popup/QuickChange";
import Header from "../components/popup/Header";

function Popup() {
  return (
    <div className="relative text-center">
      <Header />
      <QuickChange />
    </div>
  );
}

export default Popup;
