import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

const BtnsDarkMode = () => {
  const darkmode = false;
  return (
    <>
      <div className="box-dark px-4 flex gap-6 justify-around mb-4   ">
        <button className="w-12 h-12 bg-base-black flex items-center justify-center rounded-2xl shadow shadow-base-yellow">
          <MoonIcon colors={darkmode ? "#1c1d21" : "#f8f8f8"} />
        </button>
        <button className="w-12 h-12 bg-base-gray flex items-center justify-center rounded-2xl shadow shadow-base-black">
          <SunIcon colors={darkmode ? "#f8f8f8" : "#1c1d21"} />
        </button>
      </div>
    </>
  );
};

export default BtnsDarkMode;
