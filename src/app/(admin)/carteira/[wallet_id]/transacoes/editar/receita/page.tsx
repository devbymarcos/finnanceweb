import CardStyle from "@/components/cards/CardStyle";
import { typeEditTransactionProps } from "../types";
import { getInvoiceIdApi, getCategoryApi } from "@/http/api";
import { cookies } from "next/headers";
import FormEditIncome from "./FormEditIncome";

async function getInvoiceId(invoiceId?: string) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getInvoiceIdApi(token, invoiceId);
  const response = await fetch(url, options);
  return await response.json();
}

async function getCategory(wallet_id: string) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token, wallet_id);
  const response = await fetch(url, options);

  return await response.json();
}

const EditTransaction = async ({
  searchParams,
  params,
}: typeEditTransactionProps) => {
  const invoice = await getInvoiceId(searchParams?.invoiceId);
  const categoryAll = await getCategory(params.wallet_id);
  const category = categoryAll.data.filter(
    (item: any) => item.type === "income"
  );

  return (
    <section>
      <CardStyle>
        <FormEditIncome wallet={params} category={category} invoice={invoice} />
      </CardStyle>
    </section>
  );
};

export default EditTransaction;
