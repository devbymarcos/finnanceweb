import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import CreateIcon from "@/components/icons/CreateIcon";
import ListIcon from "@/components/icons/ListIcon";
import Link from "next/link";
import React from "react";

const layoutCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mb-12">
      <h1 className="text-base-black text-xl mb-4 font-bold dark:text-base-white">
        Categorias
      </h1>
      <nav className="mb-12">
        <ul className="flex gap-4">
          <li>
            <BtnLinkSubMenu href="/categorias/list">
              <ListIcon />
            </BtnLinkSubMenu>
          </li>
          <li>
            <BtnLinkSubMenu href="/categorias/nova">
              <CreateIcon />
            </BtnLinkSubMenu>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
};

export default layoutCategory;
