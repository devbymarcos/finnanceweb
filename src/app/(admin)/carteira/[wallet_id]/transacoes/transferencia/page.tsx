import CardStyle from "@/components/cards/CardStyle";
import FormTransaction from "./FormTransaction";
import { getWalletApi, getCategoryApi } from "@/http/api";
import { cookies } from "next/headers";
import { typeCreateTransactionProps } from "./types";

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

const CreateTransaction = async ({ params }: typeCreateTransactionProps) => {
  const [wallets, category] = await Promise.all([getWallet(), getCategory()]);

  return (
    <section className="mb-12">
      <CardStyle>
        <h2 className="font-bold dark:text-font-color-dark">
          Aqui vamos criar um pagamento entre carteiras
        </h2>
        <FormTransaction
          wallet={wallets}
          category={category}
          walletCurrent={params.wallet_id}
        />
      </CardStyle>
    </section>
  );
};

export default CreateTransaction;
