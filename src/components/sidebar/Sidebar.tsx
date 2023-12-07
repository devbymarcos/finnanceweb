import Image from "next/image";
import MenuSideBar from "../menu/MenuSidebar";
import BtnDark from "@/components/btn-dark-mode/BtnDark";
import BtnLight from "../btn-dark-mode/BtnLight";

const Sidebar = () => {
  return (
    <>
      <aside className="w-[250px] bg-base-gray h-screen fixed flex flex-col justify-between dark:bg-base-black overflow-y-auto  ">
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
        <div className="flex justify-evenly mb-12">
          <BtnDark />
          <BtnLight />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
