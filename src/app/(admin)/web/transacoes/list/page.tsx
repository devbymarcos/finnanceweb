import { getInvoiceApi } from "@/api/api";
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
async function getInvoiceList(date: params) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getInvoiceApi(token, date);
  const response = await fetch(url, options);

  return await response.json();
}

type Props = {
  searchParams?: {
    dateone?: string;
    datetwo?: string;
  };
};

const ListTransaction = async ({ searchParams }: Props) => {
  const data = await getInvoiceList(searchParams);

  return (
    <div className="relative overflow-x-auto rounded-md">
      <Search />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-200 uppercase bg-base-secondary   ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Itens
            </th>
          </tr>
        </thead>
        <tbody>
          {data.data &&
            data.data.map((invoice: any) => {
              return (
                <TrLink
                  router={`/web/transacoes/editar?invoiceId=${invoice.id}`}
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
                    </div>
                    <div
                      className={`${true ? "text-blue-500" : "text-red-500"}`}
                    >
                      {currencyFormatUI(invoice.price)}
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
