"use client";
import Link from "next/link";
interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BtnActionSubMenu = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      id="dark"
      onClick={onClick}
      className="bg-base-secondary px-5 py-3  text-base-white flex items-center gap-3 rounded-lg mb:rounded-sm"
    >
      {children}
    </button>
  );
};

export default BtnActionSubMenu;
