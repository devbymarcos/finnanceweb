"use client";
import Link from "next/link";
import DashIcon from "../icons/DashIcon";
import CategoryIcon from "../icons/CategoryIcon";
import WalletIcon from "../icons/WalletIcons";
import LogoutIcon from "../icons/LogoutIcon";
import React from "react";
import { useStore } from "@/hooks/useStore";
import { montserrat } from "@/fonts";
import UserIcon from "../icons/UserIcon";

interface MenuData {
  title: string;
  icon?: React.ReactElement;
  path: string;
}

const MenuSideBar = () => {
  const [dark, updateOpenSideBar, openSideBar] = useStore((state) => [
    state.dark,
    state.updateOpenSideBar,
    state.openSideBar,
  ]);

  function open() {
    updateOpenSideBar(!openSideBar);
  }

  const menuData: MenuData[] = [
    {
      title: "Inicio",
      icon: <DashIcon colors={dark == true ? "#fff" : "#000"} />,
      path: "/",
    },
    {
      title: "Adiciona Carteira",
      icon: <WalletIcon colors={dark == true ? "#fff" : "#000"} />,
      path: "/carteiras/list",
    },
    {
      title: "Cria Categoria",
      icon: <CategoryIcon colors={dark == true ? "#fff" : "#000"} />,
      path: "/categorias/list",
    },
    {
      title: "Perfil",
      icon: <UserIcon colors={dark == true ? "#fff" : "#000"} />,
      path: "/perfil/editar",
    },
    {
      title: "Sair",
      icon: <LogoutIcon colors={dark == true ? "#fff" : "#000"} />,
      path: "/logout",
    },
  ];
  return (
    <>
      <nav
        className={`h-screen w-[250px] fixed bg-base-gray dark:bg-base-black top-0 ${
          openSideBar == true ? "left-0" : "-left-[250px]"
        }   p-4 transition-all z-10`}
      >
        <ul className="">
          {menuData.map((item: MenuData) => {
            return (
              <li key={item.title} className=" py-2" onClick={open}>
                <Link
                  href={item.path}
                  className={`flex gap-4  text-font-color-light dark:text-font-color-dark  font-bold  py-3 rounded-xl ${montserrat.className}`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li className="pl-8 py-2"></li>
        </ul>
      </nav>
    </>
  );
};

export default MenuSideBar;
