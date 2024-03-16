"use client";
import { useEffect, useRef, MutableRefObject } from "react";
import Link from "next/link";
import { currencyFormatUI } from "@/functions/helpers";

type Props = {
  description: string;
  value: string;
  href: string;
};

const OpenTransaction = ({ description, value, href }: Props) => {
  return (
    <Link
      href={href}
      className=" p-1 flex gap-4 items-center -mb-3 bg-base-white dark:bg-base-black-200 px-2 py-2 rounded-lg"
    >
      <div className="w-full">
        <p
          className="text-base-black dark:text-base-white text-sm
          "
        >
          {description}
        </p>
        <p className="text-[11px] bg-orange-400 inline-block text-white px-2 rounded">
          Aberto
        </p>
      </div>
      <p className="text-base-black dark:text-base-white font-bold text-sm">
        {currencyFormatUI(Number(value))}
      </p>
    </Link>
  );
};

export default OpenTransaction;
