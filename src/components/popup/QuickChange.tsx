import react from "react";
import "../../assets/styles/App.css";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { TextField } from "@mui/material";
import { IoIosBrush } from "react-icons/io";
import CardTitle from "../global/CardTitle";
import { pintGetUpdate } from "../../methods/helpers/storageHelper";
import {
  bgGen,
  generateAccent,
  updateText,
  updateViaQuickScheme,
} from "../../methods/schemeGen";

var defaultValue = "#c0ffee";

export default function QuickChange() {
  react.useLayoutEffect(() => {
    pintGetUpdate("__color_canvas_default", setBgColor);
    pintGetUpdate("__color_calendar_graph_day_L4_bg", setL4);
    pintGetUpdate("__color_scale_gray_1", setTextColor);
  });

  const [bgColor, setBgColor] = react.useState(`${defaultValue}`);
  const [color, setColor] = react.useState(`${defaultValue}`);
  const [textColor, setTextColor] = react.useState(`${defaultValue}`);

  // l1-l4 and other used shit
  const [l4, setL4] = react.useState(`${defaultValue}`);

  function paintAccent() {
    updateViaQuickScheme(color);
    setL4(color);
  }

  function paintBg() {
    setBgColor(color);
    bgGen(color);
    updateText(generateAccent(color, -130));
  }

  function paintText() {
    updateText(color);
    setTextColor(color);
  }

  return (
    <div className="pint flex flex-row  mb-2 mt-1 mx-2">
      <div className="flex-1 flex-col rounded-lg m-1 p-1 bg-white">
        <div className="flex flex-row justify-content text-center justify-center">
          <CardTitle name="color picker - " />
          <HexColorInput
            style={{ width: 40, textAlign: "center" }}
            color={color}
            onChange={setColor}
          />
        </div>
        <div className="flex justify-content p-1">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </div>
      <div className="flex-grow flex-col rounded-lg m-1 p-1 bg-white">
        <CardTitle name="theme painter" />
        <div className="flex-start flex flex-row -center text-l mt-2 mb-1 w-[165px] p-1">
          <TextField
            id="acentColor"
            label="accent color"
            disabled={true}
            value={l4}
            variant="outlined"
            size="small"
          />
          <button
            title="updateAccent"
            className="bg-[#0d1117] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 ml-2 mb-2 mx-2 rounded-full"
            onClick={paintAccent}
          >
            <IoIosBrush className="text-xl p-0 text-white" />
          </button>
        </div>
        <div className="flex-start flex flex-row -center text-l mt-2 mb-1 w-[165px] p-1">
          <TextField
            id="bgColorHex"
            label="background"
            disabled={true}
            value={bgColor}
            variant="outlined"
            size="small"
          />
          <button
            title="updateBackground"
            className="bg-[#0d1117] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 ml-2 mb-2 mx-2 rounded-full"
            onClick={paintBg}
          >
            <IoIosBrush className="text-xl p-0 text-white" />
          </button>
        </div>
        <div className="flex-start flex flex-row -center text-l mt-2 mb-1 w-[165px] p-1">
          <TextField
            id="textColorHex"
            label="text color"
            disabled={true}
            value={textColor}
            variant="outlined"
            size="small"
          />
          <button
            title="updateText"
            className="bg-[#0d1117] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 ml-2 mb-2 mx-2 rounded-full"
            onClick={paintText}
          >
            <IoIosBrush className="text-xl p-0 text-white" />
          </button>
        </div>
        {/* <div className="flex flex-row justify-center">
        <div
        style={{ backgroundColor: activeButton }}
        className="w-5 h-5 p-1 m-1 rounded-full"
      ></div>
        <div
        style={{ backgroundColor: accentEmphasis }}
        className="w-5 h-5 p-1 m-1 rounded-full"
      ></div>
      <div
        style={{ backgroundColor: bgColor }}
        className="w-5 h-5 p-1 m-1 rounded-full"
      ></div>
        </div> */}
        <div className="flex flex-row justify-center">
          <p className="text-center">Made with ❤️ - fuwa</p>
        </div>
      </div>
    </div>
  );
}
