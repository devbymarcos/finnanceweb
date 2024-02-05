"use client";
import { useEffect, useRef, MutableRefObject } from "react";

type Props = {
  title: string;
  value: string;
};

const OpenTransaction = ({ title, value }: Props) => {
  return (
    <div className=" p-1 flex gap-4 items-center -mb-3">
      <div className="w-full">
        <p
          className="text-base-black dark:text-base-white text-sm
          "
        >
          {title}
        </p>
        <p className="text-[11px] bg-orange-400 inline-block text-white px-2 rounded">
          Aberto
        </p>
      </div>
      <p className="text-base-black dark:text-base-white font-bold text-sm">
        R${value}
      </p>
    </div>
  );
};

export default OpenTransaction;
