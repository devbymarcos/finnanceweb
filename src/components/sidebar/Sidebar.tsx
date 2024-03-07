"use client";
import Image from "next/image";
import MenuSideBar from "../menu/MenuSidebar";

import { useStore } from "@/hooks/useStore";
const Sidebar = () => {
  const openSideBar: boolean = useStore((state) => state.openSideBar);

  return (
    <>
      <aside
        className={`w-[250px] ${
          openSideBar ? "left-0" : " -left-[250px]"
        } md:left-0 transition-all bg-slate-600 h-screen fixed flex flex-col justify-between dark:bg-base-black overflow-y-auto z-40  `}
      >
        <div className="w-full mt-6">
          <Image
            src="/images/logo/wc-logo-white.png"
            width={100}
            height={100}
            alt="logo wcapp"
            className="mx-auto"
          />
          <MenuSideBar />
        </div>
        <div className="flex justify-evenly mb-12"></div>
      </aside>
    </>
  );
};

export default Sidebar;
