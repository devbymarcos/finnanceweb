import CardStyle from "@/components/cards/CardStyle";
import { typeEditTransactionProps } from "./types";
import { getInvoiceIdApi, getCategoryApi } from "@/http/api";
import { cookies } from "next/headers";
import FormEditTransaction from "./FormEditTransaction";

async function getInvoiceId(invoiceId?: string) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getInvoiceIdApi(token, invoiceId);
  const response = await fetch(url, options);
  return await response.json();
}

async function getCategory() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token);
  const response = await fetch(url, options);

  return await response.json();
}

const EditTransaction = async ({
  searchParams,
  params,
}: typeEditTransactionProps) => {
  const invoice = await getInvoiceId(searchParams?.invoiceId);

  const category = await getCategory();

  return (
    <section>
      <CardStyle>
        <FormEditTransaction
          wallet={params}
          category={category}
          invoice={invoice}
        />
      </CardStyle>
    </section>
  );
};

export default EditTransaction;
