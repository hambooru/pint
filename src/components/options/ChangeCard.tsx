import react from "react";
import "../../assets/styles/App.css";
import { IoIosBrush } from "react-icons/io";
import { BiReset } from "react-icons/bi";
import CardTitle from "../global/CardTitle";
import {
  pintSetNoReload,
  pintGetUpdate,
} from "../../methods/helpers/storageHelper";
import { settings } from "../../methods/config/settings";

var defaultValue = "#c0ffee";

var settingsList = Object.entries(settings);

interface Props {
  settingName: string;
  colorPickerColor: string;
}

export default function ChangeCard(props: Props) {
  const { settingName, colorPickerColor } = props;

  var settingReadable = settingName
    .replace(/_/g, " ")
    .replace(/color/g, "")
    .trim();

  react.useLayoutEffect(() => {
    pintGetUpdate(settingName, setCurrent);
  });

  const [current, setCurrent] = react.useState(`${defaultValue}`);

  function updateColor() {
    setCurrent(colorPickerColor);
    pintSetNoReload(settingName, colorPickerColor);
  }

  function updateColorExplicitly(value: string) {
    setCurrent(value);
    pintSetNoReload(settingName, value);
  }

  function resetDefaults() {
    // get default value from settingsList
    var defaults = settingsList.find(
      (setting) => setting[0] === settingName
    )[1];
    setCurrent(defaults);
    pintSetNoReload(settingName, defaults);
  }

  return (
    <div className="pint flex flex-row w-[260px] text-center">
      <div className="flex-1 flex-col rounded-[6px] m-1 p-1 bg-[#010409] border-solid border-[#30363d] border-2">
        <CardTitle name={current} textcolor={current} />
        <CardTitle name={settingReadable} textcolor="#010409" />
        <div className="flex flex-row justify-center justify-items-center">
          <div className="flex align-middle justify-content p-1">
            <input
              id="aaa"
              type="text"
              className="p-2 text-center text-white  w-full bg-[#010409]"
              placeholder="insert custom value/css"
              onChange={(e) => updateColorExplicitly(e.target.value)}
            />
          </div>
          <button
            title="updateColor"
            className="bg-[#0041c4] hover:bg-[#004de5] active:bg-[#0035A0]focus:outline-none focus:ring focus:ring-violet-300 px-1 my-2 mx-1  rounded-full text-white"
            onClick={updateColor}
          >
            <IoIosBrush className="text-xl p-1 text-white" />
          </button>
          <button
            title="Reset to defaults"
            className="bg-[#3a3a3a] hover:bg-[#585858] active:bg-[#272727]focus:outline-none focus:ring focus:ring-violet-300 px-1 my-2 mx-1 rounded-full text-white"
            onClick={resetDefaults}
          >
            <BiReset className="text-xl p-1 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
