import { getCategoryFlowApi } from "@/http/api";
import { cookies } from "next/headers";
import { currencyFormatUI } from "@/functions/helpers";
const months: string[] = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

async function getCategoryFlow() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryFlowApi(token);
  const response = await fetch(url, options);
  return await response.json();
}

const categoryFlow = async () => {
  const data = await getCategoryFlow();
  console.log("TCL: categoryFlow -> data", data);
  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-200 uppercase bg-base-secondary   ">
          <tr>
            <th scope="col" className="px-2 py-3 ">
              Categoria
            </th>
            {months.map((item) => {
              return (
                <th key={item} scope="col" className="px-6 py-3 ">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.income.map((item: any) => {
            return (
              <tr
                key={item.id}
                className="bg-white border-b hover:bg-slate-200 cursor-pointer dark:bg-base-black dark:border-gray-700"
              >
                <td className="py-3 px-3">{item.name}</td>
                <td className="py-3">{currencyFormatUI(item.janeiro)}</td>
                <td className="py-3">{currencyFormatUI(item.fevereiro)}</td>
                <td className="py-3">{currencyFormatUI(item.marco)}</td>
                <td className="py-3">{currencyFormatUI(item.abri)}</td>
                <td className="py-3">{currencyFormatUI(item.maio)}</td>
                <td className="py-3">{currencyFormatUI(item.junho)}</td>
                <td className="py-3">{currencyFormatUI(item.julho)}</td>
                <td className="py-3">{currencyFormatUI(item.agosto)}</td>
                <td className="py-3">{currencyFormatUI(item.setembro)}</td>
                <td className="py-3">{currencyFormatUI(item.outubro)}</td>
                <td className="py-3">{currencyFormatUI(item.novembro)}</td>
                <td className="py-3">{currencyFormatUI(item.dezembro)}</td>
              </tr>
            );
          })}
          <tr className="bg-base-secondary   text-base-white">
            <td className="py-2 px-2 table-cell-group uppercase" colSpan={13}>
              Depesas
            </td>
          </tr>
          {data.data.expense.map((item: any) => {
            return (
              <tr
                key={item.id}
                className="bg-white border-b hover:bg-slate-200 cursor-pointer dark:bg-base-black dark:border-gray-700"
              >
                <td className="py-3 px-3">{item.name}</td>
                <td className="py-3">{currencyFormatUI(item.janeiro)}</td>
                <td className="py-3">{currencyFormatUI(item.fevereiro)}</td>
                <td className="py-3">{currencyFormatUI(item.marco)}</td>
                <td className="py-3">{currencyFormatUI(item.abri)}</td>
                <td className="py-3">{currencyFormatUI(item.maio)}</td>
                <td className="py-3">{currencyFormatUI(item.junho)}</td>
                <td className="py-3">{currencyFormatUI(item.julho)}</td>
                <td className="py-3">{currencyFormatUI(item.agosto)}</td>
                <td className="py-3">{currencyFormatUI(item.setembro)}</td>
                <td className="py-3">{currencyFormatUI(item.outubro)}</td>
                <td className="py-3">{currencyFormatUI(item.novembro)}</td>
                <td className="py-3">{currencyFormatUI(item.dezembro)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default categoryFlow;
