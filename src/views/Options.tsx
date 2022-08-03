import React from "react";
import "../assets/styles/App.css";
import Header from "../components/options/Header";
import "../methods/config/settings.js";
import { settings } from "../methods/config/settings";
import ChangeCard from "../components/options/ChangeCard";
import react from "react";
import Sidebar from "../components/options/Sidebar";

var settingsList = Object.keys(settings);

var defaultValue = "#c0ffee";

export default function Options() {
  const [color, setColor] = react.useState(defaultValue);

  return (
    <div className="relative inline-flex flex-col align justify-center">
      <Header />
      <div className="relative inline-flex flex-row self-center">
        <Sidebar color={color} setColor={setColor} />
        <div className="inline-flex flex-col">
          <p className="text-3xl text-white p-1 mt-2">all settings</p>
          <p className="text-l text-white p-1 mb-2">
            customise everything from every text to every div
          </p>
          <div className="grid  xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-1">
            {settingsList.map((setting) => {
              return (
                <ChangeCard settingName={setting} colorPickerColor={color} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
