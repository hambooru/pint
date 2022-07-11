import React from 'react';
import '../assets/styles/App.css';
import Header from '../components/options/Header';
import QuickChange from '../components/options/QuickChange';
import QuickSettings from '../components/popup/QuickSettings';
import '../methods/settings.js';
import { settings } from '../methods/settings';
import ChangeCard from '../components/options/ChangeCard';
import Converter from '../components/options/Converter';
import react from 'react';
import { HexColorInput, HexColorPicker, RgbaColorPicker } from 'react-colorful';
import CardTitle from '../components/global/CardTitle';

var settingsList = Object.keys(settings);

var defaultValue = { r: 200, g: 150, b: 35, a: 0.5 } 

export default function Options() {

  const [color, setColor] = react.useState(defaultValue);

  return (
      <div className="relative flex flex-col align justify-center items-center">
        <div className="relative max-w-7xl flex flex-row">
        <div className=" w-[300px]">
          </div>
          <div className=" fixed w-[300px]">
          <Header/>
          <QuickSettings/>
          <Converter />
          <div className="pint flex flex-row  mb-2 mt-1 mx-2 text-center">
      <div className="flex-1 flex-col rounded-lg m-1 p-1 bg-white">
      <div className="flex flex-row justify-content text-center justify-center">
          <CardTitle name="color picker - " />
        </div>
        <div className="flex justify-content p-1">
          <RgbaColorPicker style={{ width: 258, height: 258 }} color={color} onChange={setColor} />
        </div>
      </div>
      </div>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl text-white p-1 mt-2">all settings</p>
            <p className="text-l text-white p-1 mb-2">customise everything from every text to every div</p>
            <div className="grid grid-cols-3 gap-1">
             {settingsList.map((setting) => {
                return <ChangeCard settingName={setting} colorPickerColor={color}/>
             })}
                    </div>
          </div>
      </div>
      </div>
      )};
