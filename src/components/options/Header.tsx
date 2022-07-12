import react from "react";
import logo from "../../assets/images/pint.svg";
import "../../assets/styles/App.css";
import { IoMdSettings } from "react-icons/io";

export default function Header() {
  return (
          <div className="flex flex-row rounded-lg mb-1 m-2 mx-3 p-1 justify-between items-center">
              <div className="flex flex-row">
                <img src={logo} className="flex-none w-12" alt="logo" />
                <div className="flex-col p-1 text-white">
                    <p className="flex-1 self-center text-xl"> pint for github </p>
                    <p className="flex-1 self-center text-l">2.0-dev - advanced mode</p>
                </div>
              </div>
              <div>
              </div>
                
          </div>
  );
}
