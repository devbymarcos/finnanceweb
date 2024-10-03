import CardStyle from "@/components/cards/CardStyle";
import React from "react";
import { getCategoryIdApi } from "@/http/api";
import { cookies } from "next/headers";
import FormEditCategory from "./FormEditCategory";
import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import { CornerUpLeft } from "lucide-react";

async function getCategory(categoryId?: string) {
  const token = cookies().get("token")?.value;
  const { url, options } = getCategoryIdApi(token, categoryId);
  const response = await fetch(url, options);
  return response.json();
}

type Params = {
  searchParams?: {
    categoryId?: string;
  };
  params: {
    wallet_id: string;
  };
};

const CreateCategory = async ({ searchParams, params }: Params) => {
  const category = await getCategory(searchParams?.categoryId);

  return (
    <section>
      <CardStyle>
        <div className="flex mb-2 justify-between gap-3">
          <h1 className="font-bold text-xl dark:text-base-white">
            Edite sua categoria
          </h1>
          <BtnLinkSubMenu
            href={`/carteira/${params.wallet_id}/categorias/list`}
          >
            <CornerUpLeft size={16} />
          </BtnLinkSubMenu>
        </div>
        <FormEditCategory category={category} />
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
