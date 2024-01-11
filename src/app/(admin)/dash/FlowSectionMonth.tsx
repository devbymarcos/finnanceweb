import React from "react";
import CardStyle from "@/components/cards/CardStyle";
import { currencyFormatUI } from "@/functions/helpers";
import DollarDashIcon from "@/components/icons/DollarIconDash";

type Props = {
  currencyUI: {
    receveidMonth: number;
    paidMonth: number;
    balaceSum: number;
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
            <h3 className="text-sm text-base-yellow uppercase font-bold">
              Receitas
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold ">
              {currencyFormatUI(currencyUI.receveidMonth)}
            </p>
          </div>
        </div>
      </CardStyle>
      <CardStyle>
        <div className="flex gap-4 items-center">
          <span className="bg-green-200 px-2 py-2 rounded-lg">
            <DollarDashIcon />
          </span>
          <div>
            <h3 className="text-sm text-base-yellow uppercase font-bold">
              Despesas
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold">
              {currencyFormatUI(currencyUI.paidMonth)}
            </p>
          </div>
        </div>
      </CardStyle>
    </>
  );
};

export default FlowSectionMonth;
