import CreateIcon from "@/components/icons/CreateIcon";
import ListIcon from "@/components/icons/ListIcon";
import Link from "next/link";
import React from "react";

const layoutCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1 className="text-base-black text-xl mb-4 font-bold dark:text-base-white">
        Categorias
      </h1>
      <nav className="mb-12">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/categorias/list"
              className="bg-base-yellow px-4 py-2  text-base-black block rounded-md"
            >
              <ListIcon />
            </Link>
          </li>
          <li>
            <Link
              href="/categorias/nova"
              className="bg-base-yellow px-4 py-2  block text-base-black  rounded-md"
            >
              <CreateIcon />
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
};

export default layoutCategory;
