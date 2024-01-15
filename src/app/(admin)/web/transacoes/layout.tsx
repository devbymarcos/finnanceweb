import CreateIcon from "@/components/icons/CreateIcon";
import ListIcon from "@/components/icons/ListIcon";
import Link from "next/link";
import React from "react";

const layoutCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1 className="text-base-black text-xl mb-4 font-bold dark:text-base-white">
        Transações
      </h1>
      <nav className="mb-12">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/web/transacoes/list"
              className="bg-base-secondary px-4 py-2  text-base-white block rounded-md"
            >
              <ListIcon />
            </Link>
          </li>
          <li>
            <Link
              href="/web/transacoes/nova"
              className="bg-base-secondary px-4 py-2  block text-base-white  rounded-md"
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
