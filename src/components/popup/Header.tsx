import logo from "../../assets/images/pint.svg";
import "../../assets/styles/App.css";
import { IoMdSettings } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { SiGithubsponsors } from "react-icons/si";

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

  function supportProject() {
    chrome.tabs.create({
      url: "https://github.com/sponsors/fuwaa",
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
            quick settings
          </p>
        </div>
      </div>
      <div>
        <button
          title="Support this project"
          className="flex-none rounded-lg text-xl text-[#db61a2] p-2"
          onClick={supportProject}
        >
          <SiGithubsponsors />
        </button>
        <button
          title="View the Source"
          className="flex-none rounded-lg text-xl text-white p-2"
          onClick={openGithub}
        >
          <AiFillGithub />
        </button>
        <button
          title="Advanced"
          className="flex-none rounded-lg text-xl text-white p-2"
          onClick={openOptions}
        >
          <IoMdSettings />
        </button>
      </div>
    </div>
  );
}
