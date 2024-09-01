"use client";
import Image from "next/image";
import MenuSideBar from "../menu/MenuSidebar";
import BtnChangeModeTheme from "@/components/btn-dark-mode/BtnChangeModeTheme";
import { useStore } from "@/hooks/useStore";
import { oswald } from "@/fonts";
const Sidebar = () => {
  const openSideBar: boolean = useStore((state) => state.openSideBar);

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
            <MenuSideBar />
          </div>
          <BtnChangeModeTheme />
        </div>
      </header>
    </>
  );
};

export default Sidebar;
