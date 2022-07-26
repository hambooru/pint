import logo from "../../assets/images/pint.svg";
import "../../assets/styles/App.css";
import { IoMdSettings } from "react-icons/io";
import {
  AiFillGithub,
  AiFillCloseCircle,
  AiFillClockCircle,
  AiFillCheckCircle,
  AiFillCiCircle,
  AiFillHeart,
} from "react-icons/ai";
import { BsFillCalendar3WeekFill, BsMenuButtonWideFill } from "react-icons/bs";
import { MdTextSnippet, MdFormatColorText } from "react-icons/md";
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
    <div className="flex flex-row mb-2 px-4 p-1 justify-between items-center bg-[#161b22] h-[64px]">
      <div className="flex flex-row">
        <img src={logo} className="flex-none w-10" alt="logo" />
        <div className="flex-col p-1 text-white align-middle ml-2 ">
          <p className="flex-1 text-left text-md mt-1"> pint for github</p>
          <p className="flex-1 text-left text-md mb-1 text-gray-400">
            sign in to broadcast your palette
          </p>
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
