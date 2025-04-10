"use server";
import { getWalletBalanceApi } from "@/http/api";
import { cookies } from "next/headers";
import WalletSection from "./wallet-home-section/WalletSection";

const getListWallet = async () => {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getWalletBalanceApi(token);
  const response = await fetch(url, options);

  return await response.json();
};

async function Index() {
  const data = await getListWallet();

  return (
    <>
      <section className="mb-5">
        <WalletSection data={data.data} />
      </section>
    </>
  );
}

export default Index;
