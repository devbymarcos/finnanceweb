import CardStyle from "@/components/cards/CardStyle";
import React from "react";
import FormCreateCategory from "./FormCreateCategory";
import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import { CornerUpLeft } from "lucide-react";

interface formCagegoryPropsType {
  params: {
    wallet_id: string;
  };
}
const CreateCategory = async ({ params }: formCagegoryPropsType) => {
  return (
    <section>
      <CardStyle>
        <div className="flex mb-2 justify-between gap-3">
          <h1 className="font-bold text-xl dark:text-base-white">
            Crie sua categoria
          </h1>
          <BtnLinkSubMenu
            href={`/carteira/${params.wallet_id}/categorias/list`}
          >
            <CornerUpLeft size={16} />
          </BtnLinkSubMenu>
        </div>
        <FormCreateCategory walletId={params.wallet_id} />
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
