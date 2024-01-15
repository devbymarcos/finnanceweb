import Link from "next/link";
import DashIcon from "../icons/DashIcon";
import CategoryIcon from "../icons/CategoryIcon";
import WalletIcon from "../icons/WalletIcons";
import TransactionIcon from "../icons/TransactionIcon";
import LogoutIcon from "../icons/LogoutIcon";
import React from "react";
import { useStore } from "@/hooks/useStore";

interface MenuData {
  title: string;
  icon: React.ReactElement;
  path: string;
}

const MenuSideBar = () => {
  const dark = useStore((state) => state.dark);

  const menuData: MenuData[] = [
    {
      title: "Dashboard",
      icon: <DashIcon colors={dark ? "#f8f8f8" : "#1c1d21"} />,
      path: "/web",
    },
    {
      title: "Carterias",
      icon: <WalletIcon />,
      path: "/web/carteiras/list",
    },
    {
      title: "Categorias",
      icon: <CategoryIcon colors={dark ? "#f8f8f8" : "#1c1d21"} />,
      path: "/web/categorias/list",
    },

    {
      title: "Transações",
      icon: <TransactionIcon colors={dark ? "#f8f8f8" : "#1c1d21"} />,
      path: "/web/transacoes/list",
    },
    {
      title: "Logout",
      icon: <LogoutIcon colors={dark ? "#f8f8f8" : "#1c1d21"} />,
      path: "/login",
    },
  ];
  return (
    <>
      <nav className="mt-12 pb-12  ">
        <ul>
          {menuData.map((item: MenuData) => {
            return (
              <li key={item.title} className="px-2 py-2">
                <Link
                  href={item.path}
                  className="flex gap-4 pl-8 text-font-color-light  dark:text-font-color-dark  font-bold hover:bg-base-white dark:hover:bg-base-black-200 py-3 rounded-xl"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <span className="border-b border-base-gray-200 w-1/2 h-1 block mx-auto"></span>
    </>
  );
};

export default MenuSideBar;
