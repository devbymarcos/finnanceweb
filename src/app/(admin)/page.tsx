"use server";
import { getDashApi } from "@/http/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import WalletSection from "./wallet-home-section/WalletSection";

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
      <section className="mb-5">
        <WalletSection router={`/carteira/1`} data={data.data.balanceSum} />
      </section>
    </>
  );
}

export default Index;
