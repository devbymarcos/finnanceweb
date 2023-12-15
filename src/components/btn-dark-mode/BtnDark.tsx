import MoonIcon from "../icons/MoonIcon";
import { useStore } from "@/hooks/useStore";

export const BtnDark = () => {
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
        id="dark"
        onClick={modeChange}
        className={` ${
          dark ? "scale-75" : "scale-100"
        } w-12 h-12  bg-base-black flex items-center justify-center rounded-2xl shadow shadow-base-yellow`}
      >
        <MoonIcon colors={"#f8f8f8"} />
      </button>
    </>
  );
};

export default BtnDark;
