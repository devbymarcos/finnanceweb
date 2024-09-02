"use client";
import BtnChangeModeTheme from "@/components/btn-dark-mode/BtnChangeModeTheme";
import { useStore } from "@/hooks/useStore";
import { oswald } from "@/fonts";
import { ChevronRight } from "lucide-react";

const Header = () => {
  const [dark, updateOpenSideBar, openSideBar] = useStore((state) => [
    state.dark,
    state.updateOpenSideBar,
    state.openSideBar,
  ]);

  function open() {
    updateOpenSideBar(!openSideBar);
  }

  return (
    <>
      <header
        className={` w-full  h-20 justify-between px-4  flex items-center  gap-6 dark:bg-base-black bg-base-white z-40  `}
      >
        <div className="flex gap-20 items-center justify-between mx-auto   container-custom h-full">
          <div className=" flex gap-20 items-center">
            <h1
              className={` text-2xl font-bold dark:text-font-color-dark ${oswald.className}`}
            >
              FINNANCE
            </h1>
            <button
              onClick={open}
              className="scale-75 w-12 h-12  bg-base-gray  dark:bg-base-black-200 flex items-center justify-center rounded-2xl shadow shadow-base-yellow"
            >
              <ChevronRight color={dark == true ? "#fff" : "#000"} />
            </button>
          </div>
          <BtnChangeModeTheme />
        </div>
      </header>
    </>
  );
};

export default Header;
