import SavePlansItem from "@/app/(admin)/dash/SavePlansItem";
import CardStyle from "../../components/cards/CardStyle";
import { getDashApi } from "@/api/api";
import dynamic from "next/dynamic";
import LastTransaction from "./dash/LastTransaction";
import { currencyFormatUI } from "@/functions/helpers";

const ChartPieDash = dynamic(() => import("@/app/(admin)/dash/ChartPieDash"), {
  ssr: false,
});

const ChartAreaDash = dynamic(
  () => import("@/app/(admin)/dash/ChartAreaDash"),
  {
    ssr: false,
  }
);
type ApiReturn = {
  data: {
    result: {
      months: string[];
      values: number[];
    };
    paidMonth: number;
    receivedMonth: number;
    balanceSum: number;
  };
  message: string;
  request: string;
};
const getDataDash = async (): Promise<ApiReturn> => {
  const { url, options } = getDashApi(3);
  const response = await fetch(url, options);
  return await response.json();
};
async function Index() {
  const data = await getDataDash();
  console.log("TCL: Index -> data", data);
  return (
    <>
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
        <div className="grid grid-cols-1 gap-5">
          <CardStyle>
            <h3 className="text-xl text-base-yellow uppercase font-bold">
              Renda Mes
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold ">
              {currencyFormatUI(data.data.receivedMonth)}
            </p>
            <p className="text-base-black dark:text-base-white font-bold ">
              60% comparado com mes anterior
            </p>
          </CardStyle>
          <CardStyle>
            <h3 className="text-xl text-base-yellow uppercase font-bold">
              Total Gastos
            </h3>
            <p className="text-2xl text-base-black dark:text-base-white font-bold">
              {currencyFormatUI(data.data.paidMonth)}
            </p>
            <p className="text-base-black dark:text-base-white font-bold">
              9% comparado com mes anterior
            </p>
          </CardStyle>
        </div>
        <div>
          <CardStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              Analytics
            </h3>
            <div className="  items-center">
              <ChartPieDash value={[90]} />
              <p className="text-center  font-bold text-base-black dark:text-base-white">
                Renda
              </p>
            </div>
            <div className=" items-center">
              <ChartPieDash value={[50]} />
              <p className="font-bold text-center text-base-black dark:text-base-white">
                Gastos
              </p>
            </div>
          </CardStyle>
        </div>
        <div className="sm:col-span-2 md:col-span-1">
          <CardStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              Saving Plans
            </h3>
            <SavePlansItem
              title="Vendas"
              type="income"
              value="1200,00"
              percentage="50"
            />
            <SavePlansItem
              title="Energia"
              type="expense"
              value="500,00"
              percentage="60"
            />
            <SavePlansItem
              title="Alimentação"
              type="expense"
              value="90,00"
              percentage="40"
            />
          </CardStyle>
        </div>
        <div className="sm:col-span-2">
          <CardStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              Profit
            </h3>
            <ChartAreaDash
              dataMonths={data.data.result.months}
              dataValues={data.data.result.values}
            />
          </CardStyle>
        </div>
        <div>
          <CardStyle>
            <h3 className="text-base-yellow uppercase first-line:font-bold text-lg">
              Transações recentes
            </h3>
            <LastTransaction
              item={{ name: "Comissão", type: "income", value: 900 }}
            />
            <LastTransaction
              item={{ name: "Energia", type: "income", value: 150 }}
            />
            <LastTransaction
              item={{ name: "Aluguel", type: "income", value: 900 }}
            />
            <LastTransaction
              item={{ name: "Mercado", type: "expense", value: 400 }}
            />
            <LastTransaction
              item={{ name: "Internet", type: "expense", value: 70 }}
            />
          </CardStyle>
        </div>
      </section>
    </>
  );
}

export default Index;
