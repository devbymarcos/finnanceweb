import CardStyle from "@/components/cards/CardStyle";
import React from "react";
import FormCreateCategory from "./FormCreateCategory";

type Params = {
  searchParams?: {
    categoryId?: string;
  };
};

const CreateCategory = async () => {
  return (
    <section>
      <CardStyle>
        <FormCreateCategory />
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
