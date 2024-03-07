"use server";
import OpenTransaction from "@/app/(admin)/carteira/[wallet_id]/dash/OpenTransaction";
import CardStyle from "@/components/cards/CardStyle";
import { getDashApi } from "@/http/api";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import FlowSectionMonth from "./dash/FlowSectionMonth";
import { ApiReturn, PropsIndex } from "./types";

const ChartPieDash = dynamic(
  () => import("@/app/(admin)/carteira/[wallet_id]/dash/ChartPieDash"),
  {
    ssr: false,
  }
);

const ChartAreaDash = dynamic(
  () => import("@/app/(admin)/carteira/[wallet_id]/dash/ChartAreaDash"),
  {
    ssr: false,
  }
);

const getDataDash = async (wallet_id: string): Promise<ApiReturn> => {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getDashApi(token, wallet_id);
  const response = await fetch(url, options);

  if (response.status == 401) {
    redirect("/login");
  }

  return await response.json();
};

async function Index({ params }: PropsIndex) {
  const data = await getDataDash(params.wallet_id);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <FlowSectionMonth
          currencyUI={{
            receveidMonth: data.data.receivedMonth,
            paidMonth: data.data.paidMonth,
            balance: data.data.balanceSum,
          }}
        />
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
                  href={`/carteira/${params.wallet_id}/transacoes/editar?invoiceId=${invoice.id}`}
                  description={invoice.description}
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
