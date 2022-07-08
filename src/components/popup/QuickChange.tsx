import react, { MouseEventHandler } from "react";
import "../../assets/styles/App.css";
import { HexColorPicker } from "react-colorful";
import { TextField } from "@mui/material";
import { IoIosBrush } from "react-icons/io";
import Preview from "../global/Preview";
import CardTitle from "../global/CardTitle";

export default function QuickChange() {
  function withEvent(func: Function): React.ChangeEventHandler<any> {
    return (event: React.ChangeEvent<any>) => {
      const { target } = event;
      func(target.value);
    };
  }

  const [aColor, setAColor] = react.useState("#ffffff");
  const [bgColor, setBgColor] = react.useState("#ffffff");
  const [color, setColor] = react.useState(aColor);

  function paintAccent() {
    setAColor(color);
    chrome.storage.sync.set({ accent_main: color });
  }
  function paintBg() {
    setBgColor(color);
    chrome.storage.sync.set({ bg_main: color });
  }

  return (
    <div className="pint flex flex-row m-2">
      <div className="flex-1 flex-col rounded-lg m-1 p-1 bg-white">
        <CardTitle name="accent customisation" />
        <div className="flex justify-content p-1">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <div className="flex-start flex flex-row items-center text-l my-2 p-1">
          <TextField
            id="aColorHex"
            label="accent color"
            value={aColor}
            onChange={withEvent(setAColor)}
            variant="outlined"
            size="small"
          />
          <button
            className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 ml-5 m-2 rounded-full"
            onClick={paintAccent}
          >
            <IoIosBrush className="text-xl p-0 text-white" />
          </button>
        </div>
        <div className="flex-start flex flex-row -center text-l mt-2 mb-1 w-[210px] p-1">
          <TextField
            id="bgColorHex"
            label="background color"
            value={bgColor}
            onChange={withEvent(setBgColor)}
            variant="outlined"
            size="small"
          />
          <button
            className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 ml-5 m-2 rounded-full"
            onClick={paintBg}
          >
            <IoIosBrush className="text-xl p-0 text-white" />
          </button>
        </div>
      </div>
      <div className="flex-grow flex-col rounded-lg m-1 p-1 bg-white">
        <CardTitle name="accent preview" />
        <Preview name="main accent" color={color} />
        <Preview name="graph L2" color={color} modifier="99" />
        <Preview name="graph L3" color={color} modifier="66" />
        <Preview name="graph L4" color={color} modifier="33" />
        <Preview name="hover" color={color} modifier="88" />
        <Preview name="disabled" color={color} modifier="77" />
        <Preview name="clicked" color={color} modifier="44" />
        <Preview name="active" color={color} modifier="55" />
        <Preview name="background" color={bgColor} />
        <Preview name="bg-accent" color={bgColor} modifier="99" />
      </div>
    </div>
  );
}
