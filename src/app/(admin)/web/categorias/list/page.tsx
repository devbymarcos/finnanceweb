import { getCategoryApi } from "@/api/api";
import EditIcon from "@/components/icons/EditIcon";
import Link from "next/link";
import { cookies } from "next/headers";
import TrLink from "@/components/table/TrLink";

async function getCategory() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token);
  const response = await fetch(url, options);

  return await response.json();
}

type dataTypesMap = {
  id: number;
  user_id: number;
  name: string;
  description: string;
  type: string;
  created_at: string;
  updated_at: string;
};
const ListCategory = async () => {
  const data = await getCategory();

  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-base-yellow   ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Descrição
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item: dataTypesMap) => {
            return (
              <TrLink router={`/categorias/editar/${item.id}`}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">
                  <span
                    className={`${
                      item.type == "expense" ? "bg-red-500" : "bg-blue-500"
                    } text-[12px] py-1 px-2 text-white rounded-md`}
                  >
                    {item.type == "expense" ? "Despesa" : "Receita"}
                  </span>
                </td>
              </TrLink>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategory;
