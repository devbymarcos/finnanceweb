import React from "react";
import CardStyle from "@/components/cards/CardStyle";
import { currencyFormatUI } from "@/functions/helpers";
import DollarDashIcon from "@/components/icons/DollarIconDash";
import BalanceIcon from "@/components/icons/BalanceIcon";

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
      <CardStyle>
        <div className="flex gap-4 items-center">
          <span className="bg-green-200 px-2 py-2 rounded-lg">
            <DollarDashIcon />
          </span>
          <div>
            <h3 className="text-sm text-base-secondary uppercase font-bold">
              Receitas no mês
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold ">
              {currencyFormatUI(currencyUI.receveidMonth)}
            </p>
          </div>
        </div>
      </CardStyle>
      <CardStyle>
        <div className="flex gap-4 items-center">
          <span className="bg-red-300 px-2 py-2 rounded-lg">
            <DollarDashIcon />
          </span>
          <div>
            <h3 className="text-sm text-base-secondary uppercase font-bold">
              Despesas no mês
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold">
              {currencyFormatUI(currencyUI.paidMonth)}
            </p>
          </div>
        </div>
      </CardStyle>
      <CardStyle>
        <div className="flex gap-4 items-center">
          <span className="bg-red-300 px-2 py-2 rounded-lg">
            <BalanceIcon />
          </span>
          <div>
            <h3 className="text-sm text-base-secondary uppercase font-bold">
              Saldo Acumulado
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold">
              {currencyFormatUI(currencyUI.balance)}
            </p>
          </div>
        </div>
      </CardStyle>
    </>
  );
};

export default FlowSectionMonth;
