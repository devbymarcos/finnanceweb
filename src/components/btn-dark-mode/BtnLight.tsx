import SunIcon from "../icons/SunIcon";
import { useStore } from "@/hooks/useStore";

export const BtnLight = () => {
  const dark = useStore((state) => state.dark);
  const updateDark = useStore((state) => state.updateDarkMode);

  function modeChange(e: any) {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
    updateDark(!dark);
  }

  return (
    <>
      <button
        id="light"
        onClick={modeChange}
        className={` ${
          dark ? "scale-100" : "scale-75"
        } w-12 h-12  bg-base-gray flex items-center justify-center rounded-2xl shadow shadow-base-black`}
      >
        <SunIcon colors={"#1c1d21"} />
      </button>
      <div />
    </>
  );
};

export default BtnLight;
