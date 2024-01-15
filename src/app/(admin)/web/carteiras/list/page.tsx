import { getWalletApi } from "@/api/api";
import { cookies } from "next/headers";
import TrLink from "@/components/table/TrLink";

async function getCategory() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getWalletApi(token);
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
              <TrLink router={`/web/carteiras/editar?wallwetId=${item.id}`}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div>
                    <p>{item.name}</p>
                    <p className="text-[11px] text-base-secondary">
                      {item.description}
                    </p>
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

export default ListCategory;
