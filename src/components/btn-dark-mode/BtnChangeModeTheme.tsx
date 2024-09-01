"use client";
import MoonIcon from "../icons/MoonIcon";
import { useStore } from "@/hooks/useStore";
import SunIcon from "@/components/icons/SunIcon";
import { useEffect } from "react";

export const BtnChangeModeTheme = () => {
  const dark = useStore((state) => state.dark);
  const updateDark = useStore((state) => state.updateDarkMode);

  function modeChange(e: any) {
    const html = document.querySelector("html");
    if (!html?.classList.contains("dark")) {
      html?.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
      updateDark(true);
    } else {
      html?.classList.remove("dark");
      localStorage.setItem("themeMode", "light");
      updateDark(false);
    }
  }

  function autoChangeModeTheme() {
    const html = document.querySelector("html");
    const theme = localStorage.getItem("themeMode");
    if (theme === "dark") {
      html?.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
      updateDark(true);
    } else {
      html?.classList.remove("dark");
      localStorage.setItem("themeMode", "light");
      updateDark(false);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("themeMode")) {
      autoChangeModeTheme();
    }
  }, []);

  return (
    <>
      <button
        id="dark"
        onClick={modeChange}
        className={`scale-75 w-12 h-12  bg-base-black  dark:bg-base-secondary flex items-center justify-center rounded-2xl shadow shadow-base-yellow`}
      >
        {dark == true && <SunIcon colors={"#fff"} />}
        {dark == false && <MoonIcon colors={"#f8f8f8"} />}
      </button>
    </>
  );
};

export default BtnChangeModeTheme;
