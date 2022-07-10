import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Switch,
} from "@mui/material";
import react from "react";
import "../../assets/styles/App.css";
import Preview from "../global/Preview";

export default function QuickSettings() {
  return (
    <div className="flex flex-col rounded-lg mt-4 mx-3 p-1 bg-white">
      <div className=" bg-whiteflex-start align-left text-l p-1">
        <p>quick settings</p>
        <div className="flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="flex-start my-1">view global user pints?</p>
            <Switch defaultChecked size="small" />
          </div>
            <form className="flex flex-row justify-between items-center" action="#">
              <label>select color scheme: </label>
              <div>
                <select name="colorschemes" id="lang" value="1">
                  <option value="0">Solarized Dark</option>
                  <option value="1">Github Dark</option>
                  <option value="2">Github Light</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
