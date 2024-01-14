import { getCategoryApi } from "@/api/api";
import { cookies } from "next/headers";
import TrLink from "@/components/table/TrLink";
import Input from "@/components/form/Input";
import { date } from "zod";
import Submit from "@/components/form/Submit";

async function getInvoiceList() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token);
  const response = await fetch(url, options);

  return await response.json();
}

const ListCategory = async () => {
  return (
    <div className="relative overflow-x-auto rounded-md">
      <form action="" className="flex gap-2 mb-3 items-center w-1/2">
        <div className="w-full">
          <Input name="data_one" value="" type="date" />
        </div>
        <div className="w-full">
          <Input name="data_two" value="" type="date" />
        </div>
        <div className="w-full">
          <Submit text="Buscar" />
        </div>
      </form>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-200 uppercase bg-base-secondary   ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Itens
            </th>
          </tr>
        </thead>
        <tbody>
          <TrLink router={`/web/transacao/editar/${"2"}`}>
            <th
              scope="row"
              className="px-6 py-4 flex items-center justify-between font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div>
                <p>Combustivel Alcool</p>
                <p className="text-[11px]">01/03/2024</p>
              </div>
              <div className={`${true ? "text-blue-500" : "text-red-500"}`}>
                R$ 250,00
              </div>
            </th>
          </TrLink>
          <TrLink router={`/categorias/editar/`}>
            <th
              scope="row"
              className="px-6 py-4 flex items-center justify-between font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div>
                <p>Mercado</p>
                <p className="text-[11px]">01/03/2024</p>
              </div>
              <div className={`${false ? "text-blue-500" : "text-red-500"}`}>
                R$ 250,00
              </div>
            </th>
          </TrLink>
        </tbody>
      </table>
    </div>
  );
};

export default ListCategory;
