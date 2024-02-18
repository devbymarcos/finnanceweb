"use server";
import OpenTransaction from "@/app/(admin)/dash/OpenTransaction";
import CardStyle from "../../components/cards/CardStyle";
import { getDashApi } from "@/http/api";
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
    balanceSum: Array<{
      walletId: number;
      saldo: number;
      name: string;
    }>;
    invoiceOpen: any;
  };
  message: string;
  request: string;
};
const getDataDash = async (): Promise<ApiReturn> => {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getDashApi(token);
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
          }}
        />
      </section>
      <section className="mb-5">
        <WalletSection data={data.data.balanceSum} />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="">
          <CardStyle>
            <h3 className="text-base-secondary first-line:font-bold text-lg">
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
            <h3 className="text-base-secondary first-line:font-bold text-lg">
              Transações Em aberto
            </h3>
            {data.data.invoiceOpen.map((invoice: any) => {
              return (
                <OpenTransaction
                  href={`/transacoes/editar?invoiceId=${invoice.id}`}
                  title={invoice.name}
                  value={invoice.price}
                  key={invoice.id}
                />
              );
            })}
          </CardStyle>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default Index;
