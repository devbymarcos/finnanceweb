import CardStyle from "@/components/cards/CardStyle";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { getWalletIdApi } from "@/api/api";
import React from "react";
import Submit from "@/components/form/Submit";
import { cookies } from "next/headers";

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
  console.log("TCL: CreateCategory -> wallet", wallet);

  return (
    <section>
      <CardStyle>
        <form>
          <div className="mb-12">
            <Label>Nome</Label>
            <Input type="text" name="name" defaultValue={wallet.data[0].name} />
          </div>
          <div className="mb-12">
            <Label>Descrição</Label>
            <Input
              type="text"
              name="description"
              defaultValue={wallet.data[0].description}
            />
          </div>

          <div className="mb-12 max-w-[250px]">
            <Submit text="Salvar" />
          </div>
        </form>
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
