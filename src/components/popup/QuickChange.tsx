import react from "react";
import "../../assets/styles/App.css";
import "../../assets/styles/RC.css";
import { HexColorPicker, HexColorInput } from "react-colorful";
import updateScale, { updateSpecific } from "../../methods/helpers/scaleHelper";
import * as scaleHelper from "../../methods/helpers/scaleHelper";
import {
  pintGetUpdate,
  pintSetNoReload,
  updateMultiple,
} from "../../methods/helpers/storageHelper";
import { updateOpacity } from "../../methods/helpers/opacityHelper";
import {
  BsFillBrushFill,
  BsFillCalendar3WeekFill,
  BsFillPaletteFill,
  BsMenuButtonWideFill,
} from "react-icons/bs";
import {
  AiFillCheckCircle,
  AiFillCiCircle,
  AiFillClockCircle,
  AiFillCloseCircle,
  AiFillHeart,
} from "react-icons/ai";
import { MdFormatColorText, MdTextSnippet } from "react-icons/md";
import * as settings from "../../methods/config/colorGroups.js";
import * as scales from "../../methods/helpers/scaleHelper.js";
import chroma from "chroma-js";
import { FcIdea } from "react-icons/fc";

var defaultValue = "#c0ffee";

var defaultScheme = "analogic";
var defaultVariation = "default";

var quickScheme: string[] = [];

export default function QuickChange() {
  react.useLayoutEffect(() => {
    pintGetUpdate(settings.cg46_6e7681[0], setScaleGray);
    pintGetUpdate(settings.cg67_bb8009[0], setScaleYellow);
    pintGetUpdate(settings.cg16_1f6feb[0], setScaleBlue);
    pintGetUpdate(settings.cg21_2ea043[0], setScaleGreen);
    pintGetUpdate(settings.cg89_f85149[0], setScaleRed);
    pintGetUpdate(settings.cg77_db61a2[0], setScalePink);
    pintGetUpdate(settings.cg60_a371f7[0], setScalePurple);
    pintGetUpdate(settings.cg19_26a641[0], setScaleCalendar);
    pintGetUpdate(settings.cg106_ffffff[0], setScaleText);
    pintGetUpdate("variation", setVariation);
    pintGetUpdate("scheme", setScheme);
    pintGetUpdate("hiddenQS", setHiddenQS);
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  });

  const [color, setColor] = react.useState(`${defaultValue}`);

  // scale colors
  const [scaleGray, setScaleGray] = react.useState(`${defaultValue}`);

  const [scheme, setScheme] = react.useState(`${defaultScheme}`);
  const [variation, setVariation] = react.useState(`${defaultVariation}`);
  const [hiddenQS, setHiddenQS] = react.useState("true");

  function paintGray() {
    updateSpecific(color, 0, 0, scales.gray);
    setScaleGray(color);
  }

  const [scaleYellow, setScaleYellow] = react.useState(`${defaultValue}`);

  function paintYellow() {
    updateSpecific(color, 0, 0, scales.yellow);
    setScaleGray(color);
  }

  const [scaleBlue, setScaleBlue] = react.useState(`${defaultValue}`);

  function paintBlue() {
    updateSpecific(color, 0, 0, scales.blue);
    setScaleGray(color);
  }

  const [scaleGreen, setScaleGreen] = react.useState(`${defaultValue}`);

  function paintGreen() {
    updateSpecific(color, 0, 0, scales.green);
    setScaleGray(color);
  }

  const [scaleRed, setScaleRed] = react.useState(`${defaultValue}`);

  function paintRed() {
    updateSpecific(color, 0, 0, scales.red);
    setScaleGray(color);
  }

  const [scalePurple, setScalePurple] = react.useState(`${defaultValue}`);

  function paintPurple() {
    updateSpecific(color, 0, 0, scales.purple);
    setScaleGray(color);
  }

  const [scalePink, setScalePink] = react.useState(`${defaultValue}`);

  function paintPink() {
    updateSpecific(color, 0, 0, scales.pink);
    setScaleGray(color);
  }

  const [scaleCalendar, setScaleCalendar] = react.useState(`${defaultValue}`);

  function paintCalendar() {
    updateSpecific(color, 0, 0, scales.calendar);
    setScaleGray(color);
  }

  const [scaleText, setScaleText] = react.useState(`${defaultValue}`);

  function paintText() {
    updateMultiple(settings.cg106_ffffff, chroma(color).hex());
    setScaleGray(color);
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setDefault() {
    pintSetNoReload("variation", "default");
    setVariation("default");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setPastel() {
    pintSetNoReload("variation", "pastel");
    setVariation("pastel");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setSoft() {
    pintSetNoReload("variation", "soft");
    setVariation("soft");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setLight() {
    pintSetNoReload("variation", "light");
    setVariation("light");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setHard() {
    pintSetNoReload("variation", "hard");
    setVariation("hard");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setPale() {
    pintSetNoReload("variation", "pale");
    setVariation("pale");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setTriade() {
    pintSetNoReload("scheme", "triade");
    setScheme("triade");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setTetrade() {
    pintSetNoReload("scheme", "tetrade");
    setScheme("tetrade");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function setAnalogic() {
    pintSetNoReload("scheme", "analogic");
    setScheme("analogic");
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function paintAll() {
    updateScale(color);
    pintGetUpdate(settings.cg46_6e7681[0], setScaleGray);
    pintGetUpdate(settings.cg67_bb8009[0], setScaleYellow);
    pintGetUpdate(settings.cg16_1f6feb[0], setScaleBlue);
    pintGetUpdate(settings.cg21_2ea043[0], setScaleGreen);
    pintGetUpdate(settings.cg89_f85149[0], setScaleRed);
    pintGetUpdate(settings.cg77_db61a2[0], setScalePink);
    pintGetUpdate(settings.cg60_a371f7[0], setScalePurple);
    pintGetUpdate(settings.cg19_26a641[0], setScaleCalendar);
    pintGetUpdate(settings.cg106_ffffff[0], setScaleText);
  }

  function updateColor(color: string) {
    setColor(color);
    quickScheme = scaleHelper.generateScheme(color, scheme, variation, 0.5);
  }

  function hideQS() {
    if (hiddenQS === "true") {
      pintSetNoReload("hiddenQS", "false");
      setHiddenQS("false");
    } else {
      pintSetNoReload("hiddenQS", "true");
      setHiddenQS("true");
    }
  }

  return (
    <div>
      <div className="pint flex flex-row  mx-2 mt-2 mb-1">
        <div className="flex-1 flex-col rounded-[6px] m-1 bg-[#010409] border-solid border-[#30363d] border-2 ">
          <div className="flex flex-row justify-content text-left text-white justify-left items-center rounded-t-[6px] bg-[#161b22] p-1">
            <BsFillPaletteFill className="mx-1" size={15} />
            <div className="flex-start align-left text-l p-1 rounded-t-lg ">
              <p className="text-semibold">color picker </p>
            </div>
            <HexColorInput
              style={{
                width: 40,
                textAlign: "left",
                color: "#b2b2b2",
                backgroundColor: "#161b22",
              }}
              color={color}
              onChange={updateColor}
            />
          </div>
          <div className="flex justify-content p-1">
            <HexColorPicker
              className="custom-layout"
              color={color}
              onChange={updateColor}
            />
          </div>
        </div>
        <div className="flex-grow flex-col align-center m-1 text-white flex-1  rounded-[6px] bg-[#010409] border-solid border-[#30363d] border-2 justify-center">
          <div className="flex flex-row justify-content text-left text-white justify-left items-center rounded-t-[6px] bg-[#161b22] p-1">
            <BsFillBrushFill className="mx-1" size={15} />
            <div className="flex-start align-left text-l p-1 rounded-t-lg ">
              <p className="text-semibold"> color painter </p>
            </div>
          </div>
          <div className="flex flex-row justify-content text-center text-white justify-center items-center p-1 mt-1">
            <div className="flex-start align-left text-l rounded-t-lg">
              <p className="">Click a button to set a color</p>
            </div>
          </div>
          <div className="flex-wrap flex flex-row justify-content text-center text-white justify-center items-center p-1">
            <button
              title="Paint Canvas"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintGray}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scaleGray,
              }}
            >
              <MdTextSnippet className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint Text Colors"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintText}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scaleText,
              }}
            >
              <MdFormatColorText className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint Primary Accents"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintBlue}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scaleBlue,
              }}
            >
              <BsMenuButtonWideFill className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint GitHub Calendar"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintCalendar}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scaleCalendar,
              }}
            >
              <BsFillCalendar3WeekFill className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint CI/CD Tasks"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintPurple}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scalePurple,
              }}
            >
              <AiFillCiCircle className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint Checks and Successors"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintGreen}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scaleGreen,
              }}
            >
              <AiFillCheckCircle className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint Warnings and Waits"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintYellow}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scaleYellow,
              }}
            >
              <AiFillClockCircle className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint Errors and Dangers"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintRed}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scaleRed,
              }}
            >
              <AiFillCloseCircle className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint GitHub Sponsors"
              className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] border-solid border-[#40363d] flex justify-between m-1"
              onClick={paintPink}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
                backgroundColor: scalePink,
              }}
            >
              <AiFillHeart className="   self-center text-xl p-1 text-[#30363d]" />
            </button>
            <button
              title="Paint Everything"
              className="bg-[#30363d] hover:bg-[#40363d] active:bg-[#676767] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[30px] w-[132px] border-solid border-[#40363d] flex justify-center m-1"
              onClick={paintAll}
              style={{
                borderWidth: "2px 2px 2px 2px",
                borderStyle: "solid",
                borderColor: "#30363d",
              }}
            >
              <p className=" self-center text-center text-md p-1 text-white">
                Update All
              </p>
            </button>
          </div>
          {/* <div className="flex-start align-left text-l  mb-1 rounded-t-lg text-blue">
            <p className="">Not Enough Settings?</p>
          </div>
          <div className="flex-start align-left text-l  mb-2 rounded-t-lg text-blue-600 ">
            <p className="">All Settings</p>
          </div>
          <div className="flex-1 flex-col rounded-[6px] bg-[#06193a] border-solid border-[#163e6d] border-2 justify-center mt-2">
            <p className="text-center">Made with ❤️ - fuwa</p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col rounded-lg mb-3 mx-3">
        <div className="flex-1 flex-col rounded-[6px] bg-[#06193a] border-solid border-[#163e6d] border-2 ">
          <button
            className="flex flex-row justify-content text-left text-white justify-left items-center  mt-2 ml-2 mb-2"
            onClick={hideQS}
          >
            <FcIdea className="mx-1" />
            <p className="text-semibold">
              {hiddenQS === "true"
                ? "Need ideas? Click me show similar colors!"
                : "Showing similar colors. Click me to hide!"}
            </p>
          </button>
          <div className={`${hiddenQS === "true" ? "hidden" : ""}`}>
            <div className="flex flex-row justify-content text-left text-[#3080af] justify-left items-center  mt-2 ml-3 mb-1">
              <p className="text-semibold">Scheme Variations</p>
            </div>
            <div className="flex flex-row justify-content p-1 ml-2">
              <button
                className={`mr-1 ${
                  scheme === "triade"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                }  hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setTriade}
              >
                {" "}
                triade{" "}
              </button>
              <button
                className={`mr-1 ${
                  scheme === "tetrade"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                } hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setTetrade}
              >
                {" "}
                tetrade{" "}
              </button>
              <button
                className={`mr-1 ${
                  scheme === "analogic"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                } hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setAnalogic}
              >
                {" "}
                analogic{" "}
              </button>
            </div>
            <div className="flex flex-row justify-content text-left text-[#3080af] justify-left items-center  mt-2 ml-3 mb-1">
              <p className="text-semibold">Color Variations</p>
            </div>
            <div className="flex flex-row justify-content p-1 ml-2">
              <button
                className={`mr-1 ${
                  variation === "default"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                } hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setDefault}
              >
                {" "}
                default{" "}
              </button>
              <button
                className={`mr-1 ${
                  variation === "pastel"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                } hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setPastel}
              >
                {" "}
                pastel{" "}
              </button>
              <button
                className={`mr-1 ${
                  variation === "soft"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                } hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setSoft}
              >
                {" "}
                soft{" "}
              </button>
              <button
                className={`mr-1 ${
                  variation === "light"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                } hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setLight}
              >
                {" "}
                light{" "}
              </button>
              <button
                className={`mr-1 ${
                  variation === "hard"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                } hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setHard}
              >
                {" "}
                hard{" "}
              </button>
              <button
                className={`mr-1 ${
                  variation === "pale"
                    ? "bg-[#1f6feb] text-[#ffffff]"
                    : "bg-[#163e6d] text-[#3ba6ff]"
                } hover:bg-[#1d5393] py-[2px] px-2 justify-between align-middle rounded-full table-cell`}
                onClick={setPale}
              >
                {" "}
                pale{" "}
              </button>
            </div>
            <div className="flex flex-row justify-content text-left text-[#3080af] justify-left items-center  mt-2 ml-3 mb-1">
              <p className="text-semibold">Generated Colors</p>
            </div>
            <div className="flex flex-row justify-content p-1 ml-2 mb-2">
              {quickScheme.map((qsColor) => {
                return (
                  <button
                    title={qsColor}
                    className=" hover:bg-[#40363d] active:bg-[#40363d] focus:outline-none focus:ring focus:bg-[#40363d] p-2 rounded-[6px] h-[15px] w-[15px] border-solid border-[#163e6d] flex justify-between mr-1"
                    onClick={() => {
                      setColor(qsColor);
                    }}
                    style={{
                      borderWidth: "2px 2px 2px 2px",
                      borderStyle: "solid",
                      borderColor: "#30363d",
                      backgroundColor: chroma(qsColor).hex(),
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
