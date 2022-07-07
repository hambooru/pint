import react from "react";
import logo from "../assets/images/pint.svg";
import "../assets/styles/App.css";
import { HexColorPicker } from "react-colorful";
import { TextField } from "@mui/material";
import { BiSave } from "react-icons/bi";

export default function AccentChange() {
    function withEvent(func: Function): React.ChangeEventHandler<any> {
        return (event: React.ChangeEvent<any>) => {
          const { target } = event;
          func(target.value);
        };
      }

    const [color, setColor] = react.useState("#ff0000");
  return (
          <div className="pint flex flex-row mt-2 mx-2">
            <div className="flex-1 flex-col rounded-lg m-1 p-1 bg-white">
                  <div className=" bg-whiteflex-start align-left text-l p-1">
                    <p>accent customisation</p>
                  </div>
                  <div className="flex justify-center p-1">
                      <HexColorPicker color={color} onChange={setColor} />
                  </div>
                  <div className="flex-start flex flex-row align-left text-l p-1">
                   <TextField id="standard-basic flex-grow" label="Hex Code Override" value={color} onChange={withEvent(setColor)} variant="standard"/> 
                   <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 ml-5 m-2 rounded-full" ><BiSave className="text-xl p-0 text-white" /></button>
                  </div>

              </div>
              <div className="flex-grow flex-col rounded-lg m-1 p-1 bg-white">
                  <div className="flex-start align-left text-l p-1">
                    <p>accent preview</p>
                  </div>
                  <div className="flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <p className="flex-start m-1">main accent</p>
                        <div style={{ backgroundColor: color + "ff" }} className="w-5 h-5 p-1 m-1  rounded-lg" ></div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="flex-start m-1">graph L2</p>
                        <div style={{ backgroundColor: color + "99" }} className="w-5 h-5 p-1 m-1  rounded-lg" ></div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="flex-start m-1">graph L3</p>
                        <div style={{ backgroundColor: color + "66" }} className="w-5 h-5 p-1 m-1  rounded-lg" ></div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="flex-start m-1">graph L4</p>
                        <div style={{ backgroundColor: color + "33" }} className="w-5 h-5 p-1 m-1  rounded-lg" ></div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="flex-start m-1">hover</p>
                        <div style={{ backgroundColor: color + "ff" }} className="w-5 h-5 p-1 m-1  rounded-lg" ></div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="flex-start m-1">disabled</p>
                        <div style={{ backgroundColor: color + "ff" }} className="w-5 h-5 p-1 m-1  rounded-lg" ></div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="flex-start m-1">clicked</p>
                        <div style={{ backgroundColor: color + "ff" }} className="w-5 h-5 p-1 m-1  rounded-lg" ></div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="flex-start m-1">active</p>
                        <div style={{ backgroundColor: color + "ff" }} className="w-5 h-5 p-1 m-1  rounded-lg" ></div>
                    </div>
                  </div>
              </div>
          </div>
  );
}
