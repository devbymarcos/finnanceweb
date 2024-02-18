import { getInvoiceApi, getWalletApi } from "@/http/api";
import { cookies } from "next/headers";
import TrLink from "@/components/table/TrLink";
import { currencyFormatUI, formattedDateView } from "@/functions/helpers";
import Search from "../search/Search";

type params =
  | {
      dateone?: string;
      datetwo?: string;
    }
  | undefined;
async function getInvoiceList(data: params) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getInvoiceApi(token, data);
  const response = await fetch(url, options);

  return await response.json();
}

async function getWallet() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getWalletApi(token);
  const response = await fetch(url, options);

  return await response.json();
}
type Props = {
  searchParams?: {
    dateone?: string;
    datetwo?: string;
    walletId?: string;
  };
};

const ListTransaction = async ({ searchParams }: Props) => {
  let invoice, wallet;

  if (searchParams) {
    invoice = await getInvoiceList(searchParams);
    wallet = await getWallet();
  }

  return (
    <div className="relative overflow-x-auto rounded-md">
      <Search wallet={wallet} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-200 uppercase bg-base-secondary   ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Itens
            </th>
          </tr>
        </thead>
        <tbody>
          {invoice.data &&
            invoice.data.map((invoice: any) => {
              return (
                <TrLink
                  router={`/transacoes/editar?invoiceId=${invoice.id}`}
                  key={invoice.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 flex items-center justify-between font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div>
                      <p>{invoice.description}</p>
                      <p className="text-[11px]">
                        {formattedDateView(invoice.due_at)}
                      </p>
                      {invoice.pay == "paid" && (
                        <p
                          className={`inline-block text-green-500   font-bold text-[12px] `}
                        >
                          Pago
                        </p>
                      )}
                      {invoice.pay == "unpaid" && (
                        <p
                          className={`inline-block  text-red-500   font-bold text-[12px] `}
                        >
                          Aguardando pagamento
                        </p>
                      )}
                    </div>
                    <div
                      className={`${
                        invoice.type == "income"
                          ? "text-blue-500"
                          : "text-red-500"
                      } `}
                    >
                      {invoice.type == "income" &&
                        "+ " + currencyFormatUI(invoice.price)}
                      {invoice.type == "expense" &&
                        "- " + currencyFormatUI(invoice.price)}
                    </div>
                  </th>
                </TrLink>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTransaction;
