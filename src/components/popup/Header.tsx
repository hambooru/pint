import logo from "../../assets/images/pint.svg";
import "../../assets/styles/App.css";
import { IoMdSettings } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  function openOptions() {
    chrome.runtime.openOptionsPage();
  }

  function openGithub() {
    chrome.tabs.create({
      url: "https://github.com/fuwaa/pint",
      selected: true,
    });
  }
  return (
    <div className="flex flex-row rounded-lg mb-1 m-2 mx-3 p-1  justify-between items-center">
      <div className="flex flex-row">
        <img src={logo} className="flex-none w-12" alt="logo" />
        <div className="flex-col p-1 text-white">
          <p className="flex-1 self-center text-xl"> pint for github </p>
          <p className="flex-1 self-center text-l">2.0-dev - simple mode</p>
        </div>
      </div>
      <div>
        <button
          title="Advanced"
          className="flex-none p-1 rounded-lg text-xl text-white p-2"
          onClick={openGithub}
        >
          <AiFillGithub />
        </button>
        <button
          title="Advanced"
          className="flex-none p-1 rounded-lg text-xl text-white p-2"
          onClick={openOptions}
        >
          <IoMdSettings />
        </button>
      </div>
    </div>
  );
}
