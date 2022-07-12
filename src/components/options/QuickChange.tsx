import react from "react";
import "../../assets/styles/App.css";
import { HexColorInput, HexColorPicker } from "react-colorful";
import CardTitle from "../global/CardTitle";

var defaultValue = "#c0ffee";

export default function QuickChange() {
  react.useLayoutEffect(() => {});

  const [color, setColor] = react.useState(`${defaultValue}`);

  return (
    <div className="pint flex flex-row  mb-2 mt-1 mx-2 text-center">
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
          <HexColorPicker
            style={{ width: 258, height: 258 }}
            color={color}
            onChange={setColor}
          />
        </div>
      </div>
    </div>
  );
}
