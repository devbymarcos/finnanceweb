import CardStyle from "@/components/cards/CardStyle";
import FormTransaction from "./FormTransaction";
import { getWalletApi, getCategoryApi } from "@/api/api";
import { cookies } from "next/headers";

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

const CreateTransaction = async () => {
  const wallets = await getWallet();
  const category = await getCategory();

  return (
    <section className="mb-12">
      <CardStyle>
        <FormTransaction wallet={wallets} category={category} />
      </CardStyle>
    </section>
  );
};

export default CreateTransaction;
