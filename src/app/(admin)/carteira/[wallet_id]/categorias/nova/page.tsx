import CardStyle from "@/components/cards/CardStyle";
import React from "react";
import FormCreateCategory from "./FormCreateCategory";

interface formCagegoryPropsType {
  params: {
    wallet_id: string;
  };
}
const CreateCategory = async ({ params }: formCagegoryPropsType) => {
  return (
    <section>
      <CardStyle>
        <FormCreateCategory walletId={params.wallet_id} />
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
