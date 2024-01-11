"use server";
import SavePlansItem from "@/app/(admin)/dash/SavePlansItem";
import CardStyle from "../../components/cards/CardStyle";
import { getDashApi } from "@/api/api";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import WalletSection from "./dash/WalletSection";
import FlowSectionMonth from "./dash/FlowSectionMonth";

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
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getDashApi(token, 3);
  const response = await fetch(url, options);

  if (response.status == 401) {
    redirect("/login");
  }

  return await response.json();
};

async function Index() {
  const data = await getDataDash();
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <FlowSectionMonth
          currencyUI={{
            receveidMonth: data.data.receivedMonth,
            paidMonth: data.data.paidMonth,
            balaceSum: data.data.balanceSum,
          }}
        />
      </section>
      <section className="mb-5">
        <WalletSection />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="">
          <CardStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              Resultado
            </h3>
            <ChartAreaDash
              dataMonths={data.data.result.months}
              dataValues={data.data.result.values}
            />
          </CardStyle>
        </div>
        <div className="">
          <CardStyle>
            <h3 className="text-base-yellow first-line:font-bold text-lg">
              Metas
            </h3>
            <SavePlansItem
              title="Viagem exterior "
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
      </section>
      <section></section>
    </>
  );
}

export default Index;
