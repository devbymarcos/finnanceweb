"use client";
import CardStyle from "@/components/cards/CardStyle";
import WalletIcon from "@/components/icons/WalletIcons";
import WalletDashUiIcon from "@/components/icons/WalletDashUiIcon";
import { currencyFormatUI } from "@/functions/helpers";

import { Props } from "./types";
import Link from "next/link";

const WalletSection = ({ data }: any) => {
  return (
    <CardStyle>
      <h3 className="text-md text-base-secondary  flex gap-3 items-center  font-bold">
        <WalletIcon />
        Minhas carteiras
      </h3>
      <div className="text-base-black dark:text-base-white">
        <ul className="w-full">
          {data.map((wallet: any) => {
            return (
              <li
                key={wallet.id}
                className="mb-2  bg-base-white dark:bg-base-black-200   rounded-lg"
              >
                <Link
                  className="flex gap-2 px-3 py-6 items-center"
                  href={`carteira/${wallet.id}`}
                >
                  <WalletDashUiIcon />
                  <div className="w-full flex justify-between items-center ">
                    <p>{wallet.name}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </CardStyle>
  );
};

export default WalletSection;
