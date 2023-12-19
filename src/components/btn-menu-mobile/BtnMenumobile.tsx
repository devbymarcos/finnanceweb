"use client";
import { useStore } from "@/hooks/useStore";

const BtnMenuMobile = () => {
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
      <button
        onClick={open}
        className="bg-base-gray dark:bg-base-black p-2 block md:hidden rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke={dark ? "#f8f8f8" : "#1c1d21"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </>
  );
};

export default BtnMenuMobile;
