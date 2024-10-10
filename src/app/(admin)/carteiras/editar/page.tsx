import CardStyle from "@/components/cards/CardStyle";
import { getWalletIdApi } from "@/http/api";
import React from "react";
import { cookies } from "next/headers";
import FormEditCarteira from "./FormEditCarteira";

async function getWallet(walletId: string | undefined) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getWalletIdApi(token, walletId);
  const response = await fetch(url, options);
  return response.json();
}

type Params = {
  searchParams?: {
    walletId?: string;
  };
};

const CreateCategory = async ({ searchParams }: Params) => {
  const wallet = await getWallet(searchParams?.walletId);

  return (
    <section>
      <CardStyle>
        <FormEditCarteira wallet={wallet} />
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
