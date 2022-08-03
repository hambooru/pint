import logo from "../../assets/images/pint.svg";
import "../../assets/styles/App.css";
import { AiFillGithub } from "react-icons/ai";
import { SiGithubsponsors } from "react-icons/si";

export default function Header() {
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
    <div className="sticky top-0 z-30 w-screen flex flex-row mb-2 p-1 justify-between items-center bg-[#161b22] h-[64px]  px-3 px-md-4 px-lg-5 ">
      <div className="flex flex-row">
        <img src={logo} className="flex-none w-10" alt="logo" />
        <div className="flex-col p-1 text-white align-middle ml-2 ">
          <p className="flex-1 text-left text-md mt-1"> pint for github</p>
          <p className="flex-1 text-left text-md mb-1 text-gray-400">
            advanced settings
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <button
          title="Support this project"
          className=" hover:bg-[#40363d] active:bg-[#5b5b5b] focus:outline-none focus:ring focus:bg-[#444444] p-2 rounded-[6px] h-[30px] border-solid border-2 border-[#404040] hover:border-[#ffffff] flex flex-row justify-between m-1"
          onClick={supportProject}
        >
          <SiGithubsponsors className="self-center text-xl p-1 text-[#db61a2]" />
          <p className="self-center p-1 text-white"> Support this project </p>
        </button>
        <button
          title="View the Source"
          className="flex-none rounded-lg text-xl text-white p-2"
          onClick={openGithub}
        >
          <AiFillGithub />
        </button>
      </div>
    </div>
  );
}
