"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  router: string;
};

const TrLink = ({ children, router }: Props) => {
  const { push } = useRouter();
  function goView(): void {
    push(router);
  }

  return (
    <tr
      onClick={goView}
      className="bg-white border-b hover:bg-slate-200 cursor-pointer dark:bg-base-black dark:border-gray-700"
    >
      {children}
    </tr>
  );
};
export default TrLink;
