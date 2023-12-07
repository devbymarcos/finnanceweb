import Image from "next/image";

import MenuSideBar from "../menu/MenuSidebar";
import BtnDark from "@/components/btn-dark-mode/BtnDark";
import BtnLight from "../btn-dark-mode/BtnLight";

const Sidebar = () => {
  return (
    <>
      <aside className="w-64 bg-base-gray h-screen fixed flex flex-col justify-between dark:bg-base-black overflow-y-auto  ">
        <div className="w-full mt-6">
          <Image
            src="/images/logo/logo-light.png"
            width={70}
            height={70}
            alt="logo wcapp"
            className="mx-auto"
          />
          <MenuSideBar />
        </div>
        {/* <div className="p-2 w-full ">
          <div className="p-4 items-center  text-lg font-bold my-12 w-full h-44 bg-base-yellow text-font-color-dark shadow-inner  shadow-neutral-500 rounded-3xl">
            <p>Escolha a carteira para controlar</p>
            <select className="text-font-color-light mt-6 w-full rounded-md py-2 px-2 text-base border-0 outline-none cursor-pointer">
              <option>minha carteira</option>
            </select>
          </div>
        </div> */}
        <div className="flex justify-evenly mb-12">
          <BtnDark />
          <BtnLight />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
