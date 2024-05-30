"use client";
import Image from "next/image";
import MenuSideBar from "../menu/MenuSidebar";
import BtnChangeModeTheme from "@/components/btn-dark-mode/BtnChangeModeTheme";
import { useStore } from "@/hooks/useStore";
const Sidebar = () => {
  const openSideBar: boolean = useStore((state) => state.openSideBar);

  return (
    <>
      <header
        className={` w-full bg-slate-600 h-24 justify-between px-4  flex items-center  gap-6 dark:bg-base-black  z-40  `}
      >
        <div className="flex items-center">
          <div className="">
            <Image
              src="/images/logo/wc-logo-white.png"
              width={100}
              height={100}
              alt="logo wcapp"
              className="mx-auto"
            />
          </div>
          <MenuSideBar />
        </div>
        <BtnChangeModeTheme />
      </header>
    </>
  );
};

export default Sidebar;
