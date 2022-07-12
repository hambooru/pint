import react from "react";
import "../../assets/styles/App.css";
import { IoIosBrush } from "react-icons/io";
import CardTitle from "../global/CardTitle";
import { pintSetNoReload, pintGetUpdate } from "../../methods/helper";

var defaultValue = "#c0ffee";

interface Props {
  settingName: string;
  colorPickerColor: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
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
    var stringifiedColor = `rgba(${colorPickerColor.r},${colorPickerColor.g},${colorPickerColor.b},${colorPickerColor.a})`;
    setCurrent(stringifiedColor);
    pintSetNoReload(settingName, stringifiedColor);
  }

  function updateColorExplicitly(value: string) {
    setCurrent(value);
    pintSetNoReload(settingName, value);
  }

  return (
    <div className="pint flex flex-row w-[260px] text-center">
      <div className="flex-1 flex-col rounded-lg m-1 p-1 bg-white">
        <CardTitle name={current} textcolor={current} />
        <CardTitle name={settingReadable} />
        <div className="flex flex-row justify-center justify-items-center">
          <div className="flex align-middle justify-content p-1">
            <input
              id="aaa"
              type="text"
              className="p-2 text-center w-full"
              placeholder="insert replacement value"
              onChange={(e) => updateColorExplicitly(e.target.value)}
            />
          </div>
          <button
            title="updateColor"
            className="bg-[#0d1117] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 ml-2 mx-2 my-1 rounded-full text-white"
            onClick={updateColor}
          >
            <IoIosBrush className="text-xl p-1 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
