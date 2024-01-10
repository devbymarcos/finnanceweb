import { getCategoryApi } from "@/api/api";
import EditIcon from "@/components/icons/EditIcon";
import Link from "next/link";
import { cookies } from "next/headers";

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
            <th scope="col" className="px-6 py-3">
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item: dataTypesMap) => {
            return (
              <tr className="bg-white border-b dark:bg-base-black dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.type}</td>

                <td className="px-6 py-4">
                  <Link href={`/categorias/editar/${item.id}`}>
                    <EditIcon />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategory;
