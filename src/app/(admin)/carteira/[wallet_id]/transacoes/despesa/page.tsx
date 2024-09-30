import CardStyle from "@/components/cards/CardStyle";
import FormTransaction from "./FormTransaction";
import { getWalletApi, getCategoryApi } from "@/http/api";
import { cookies } from "next/headers";
import { typeCreateTransactionProps } from "./types";

async function getCategory() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token);
  const response = await fetch(url, options);

  return await response.json();
}

const CreateTransaction = async ({ params }: typeCreateTransactionProps) => {
  const categoryFull = await getCategory();
  console.log(categoryFull);
  const category = categoryFull.data.filter(
    (item: any) => item.type === "expense"
  );

  return (
    <section className="mb-12">
      <CardStyle>
        <FormTransaction wallet={params} category={category} />
      </CardStyle>
    </section>
  );
};

export default CreateTransaction;
