import React from "react";
import CardStyle from "@/components/cards/CardStyle";
import { currencyFormatUI } from "@/functions/helpers";

import { DollarSign, Scale } from "lucide-react";

type Props = {
  currencyUI: {
    receveidMonth: number;
    paidMonth: number;
    balance: number;
  };
};

const FlowSectionMonth = ({ currencyUI }: Props) => {
  return (
    <>
      <div className="flex gap-4 items-center p-4 rounded-lg bg-base-white dark:bg-base-black">
        <span className="bg-red-300 px-2 py-2 rounded-lg">
          <Scale color="#1c1d21" />
        </span>
        <div>
          <h3 className="text-[10px] md:text-sm text-base-secondary uppercase font-bold">
            Saldo Acumulado
          </h3>
          <p className="text-2xl text-base-black dark:text-base-white font-bold">
            {currencyFormatUI(currencyUI.balance)}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex gap-4 items-center p-2 md:p-4 rounded-lg bg-base-white dark:bg-base-black">
          <span className="bg-green-200 px-2 py-2 rounded-lg">
            <DollarSign color="#1c1d21" />
          </span>
          <div>
            <h3 className="text-[9px] md:text-sm text-base-secondary uppercase font-bold">
              Receitas no mês
            </h3>
            <p className="text-sm md:text-2xl text-base-black dark:text-base-white font-bold ">
              {currencyFormatUI(currencyUI.receveidMonth)}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center  p-2 md:p-4 rounded-lg bg-base-white dark:bg-base-black">
          <span className="bg-red-300 px-2 py-2 rounded-lg">
            <DollarSign color="#1c1d21" />
          </span>
          <div>
            <h3 className="text-[9px] md:text-sm text-base-secondary uppercase font-bold">
              Despesas no mês
            </h3>
            <p className="text-sm md:text-2xl text-base-black dark:text-base-white font-bold">
              {currencyFormatUI(currencyUI.paidMonth)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowSectionMonth;
