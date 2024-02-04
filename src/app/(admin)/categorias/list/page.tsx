import { getCategoryApi } from "@/http/api";
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
        <thead className="text-xs text-gray-200 uppercase bg-base-secondary   ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Descrição
            </th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item: dataTypesMap) => {
            return (
              <TrLink
                key={item.id}
                router={`/categorias/editar?categoryId=${item.id}`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                  <span
                    className={`${
                      item.type == "expense" ? "text-red-500" : "text-blue-500"
                    } text-[12px]    rounded-md block`}
                  >
                    {item.type == "expense" ? "Despesa" : "Receita"}
                  </span>
                </th>
              </TrLink>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategory;
