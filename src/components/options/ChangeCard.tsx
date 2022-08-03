import react from "react";
import "../../assets/styles/App.css";
import { IoIosBrush } from "react-icons/io";
import CardTitle from "../global/CardTitle";
import {
  pintSetNoReload,
  pintGetUpdate,
} from "../../methods/helpers/storageHelper";

var defaultValue = "#c0ffee";

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
            className="bg-[#0041c4] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 ml-2 mx-2 my-1 rounded-full text-white"
            onClick={updateColor}
          >
            <IoIosBrush className="text-xl p-1 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
