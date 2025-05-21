import CardStyle from "@/components/cards/CardStyle";
import FormTransaction from "./FormTransaction";
import { getCategoryApi } from "@/http/api";
import { cookies } from "next/headers";
import { typeCreateTransactionProps } from "./types";

async function getCategory(wallet_id: string) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token, wallet_id);
  const response = await fetch(url, options);

  return await response.json();
}

const CreateTransaction = async ({ params }: typeCreateTransactionProps) => {
  const categoryAll = await getCategory(params.wallet_id);
  const category = categoryAll.data?.filter(
    (item: any) => item.type === "income"
  );

  return (
    <section className="mb-12 px-3 ">
      <CardStyle>
        <FormTransaction wallet={params} category={category} />
      </CardStyle>
    </section>
  );
};

export default CreateTransaction;
