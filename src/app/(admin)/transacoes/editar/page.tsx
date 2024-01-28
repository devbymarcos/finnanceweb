import CardStyle from "@/components/cards/CardStyle";

import { getInvoiceIdApi, getWalletApi, getCategoryApi } from "@/http/api";
import { cookies } from "next/headers";
import FormEditTransaction from "./FormEditTransaction";

async function getInvoiceId(invoiceId?: string) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getInvoiceIdApi(token, invoiceId);
  const response = await fetch(url, options);
  return await response.json();
}

async function getWallet() {
  const token = cookies().get("token")?.value;
  const { url, options } = getWalletApi(token);
  const response = await fetch(url, options);
  return await response.json();
}

async function getCategory() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token);
  const response = await fetch(url, options);

  return await response.json();
}

type Props = {
  searchParams?: {
    invoiceId?: string;
  };
};

const CreateTransaction = async ({ searchParams }: Props) => {
  const invoice = await getInvoiceId(searchParams?.invoiceId);
  const wallet = await getWallet();
  const category = await getCategory();

  return (
    <section>
      <CardStyle>
        <FormEditTransaction
          wallet={wallet}
          category={category}
          invoice={invoice}
        />
      </CardStyle>
    </section>
  );
};

export default CreateTransaction;
