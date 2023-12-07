import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export const BtnDarkMode = () => {
  const darkmode = false;
  return (
    <>
      <button className="w-12 h-12 bg-base-black flex items-center justify-center rounded-2xl shadow shadow-base-yellow">
        <MoonIcon colors={darkmode ? "#1c1d21" : "#f8f8f8"} />
      </button>
    </>
  );
};

export const BtnlightMode = () => {
  const darkmode = false;
  return (
    <>
      <button className="w-12 h-12 bg-base-gray flex items-center justify-center rounded-2xl shadow shadow-base-black">
        <SunIcon colors={darkmode ? "#f8f8f8" : "#1c1d21"} />
      </button>
    </>
  );
};
