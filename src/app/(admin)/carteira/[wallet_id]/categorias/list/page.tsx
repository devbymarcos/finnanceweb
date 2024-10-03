import { getCategoryApi } from "@/http/api";
import EditIcon from "@/components/icons/EditIcon";
import Link from "next/link";
import { cookies } from "next/headers";
import TrLink from "@/components/table/TrLink";
import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import { ArrowLeft, Plus } from "lucide-react";

async function getCategory(wallet_id: string) {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getCategoryApi(token, wallet_id);
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

interface listCategoryType {
  params: {
    wallet_id: string;
  };
}
const ListCategory = async ({ params }: listCategoryType) => {
  const data = await getCategory(params.wallet_id);
  console.log(data);

  return (
    <>
      <div className="flex mb-2 justify-end gap-3">
        <BtnLinkSubMenu href={`/carteira/${params.wallet_id}/categorias/nova`}>
          <Plus size={16} />
        </BtnLinkSubMenu>
      </div>
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
            {!data.data
              ? null
              : data.data.map((item: dataTypesMap) => {
                  return (
                    <TrLink
                      key={item.id}
                      router={`/carteira/${params.wallet_id}/categorias/editar?categoryId=${item.id}`}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                        <span
                          className={`${
                            item.type == "expense"
                              ? "text-red-500"
                              : "text-blue-500"
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
    </>
  );
};

export default ListCategory;
