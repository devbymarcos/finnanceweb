"use server";
import OpenTransaction from "@/app/(admin)/carteira/[wallet_id]/dash/OpenTransaction";
import CardStyle from "@/components/cards/CardStyle";
import { getDashApi } from "@/http/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import FlowSectionMonth from "./dash/FlowSectionMonth";
import { ApiReturn, PropsIndex } from "./types";
import { ChartAreaDash } from "./dash/ChartAreaDash";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Scale } from "lucide-react";
import { currencyFormatUI } from "@/functions/helpers";

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
      <section className="grid grid-cols-1 gap-5 mb-5">
        <Card>
          <CardHeader>
            <CardTitle className="text-base-secondary">
              SALDO ACUMULADO
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <span className="bg-red-300 px-2 py-2 rounded-lg">
              <Scale color="#1c1d21" size={16} />
            </span>
            <p className="text-2xl text-base-black dark:text-base-white font-bold">
              {currencyFormatUI(data.data.balanceSum)}
            </p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-3">
          <Card className="">
            <CardHeader className="p-3 space-y-1">
              <CardTitle className="text-base-secondary text-[11px] md:text-base">
                RECETIAS NO MES
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 p-2 items-center">
              <span className="bg-green-200 px-2 py-2 rounded-lg">
                <DollarSign color="#1c1d21" size={16} />
              </span>
              <p className="text-[12px] md:text-2xl text-base-black dark:text-base-white font-bold">
                {currencyFormatUI(data.data.receivedMonth)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-3 mb-0 space-y-1">
              <CardTitle className="text-base-secondary text-[11px] md:text-base">
                DESPESAS NO MES
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 p-2 items-center">
              <span className="bg-red-300 px-2 py-2 rounded-lg">
                <DollarSign color="#1c1d21" size={16} />
              </span>
              <p className=" text-[14px] md:text-2xl text-base-black dark:text-base-white font-bold">
                {currencyFormatUI(data.data.paidMonth)}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="">
          <ChartAreaDash dataChart={data.data.chart} />
        </div>
        <div className="">
          <CardStyle>
            <h3 className="text-base-secondary first-line:font-bold text-lg">
              Transações Pendentes
            </h3>
            {data.data.invoiceOpen != null &&
              data.data.invoiceOpen.map((invoice: any) => {
                return (
                  <OpenTransaction
                    href={`/carteira/${params.wallet_id}/transacoes/editar/${
                      invoice.type === "income" ? "receita" : "despesa"
                    }?invoiceId=${invoice.id}`}
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
