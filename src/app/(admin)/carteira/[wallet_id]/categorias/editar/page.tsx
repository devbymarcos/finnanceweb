import CardStyle from "@/components/cards/CardStyle";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import React from "react";
import Submit from "@/components/form/Submit";
import { getCategoryIdApi } from "@/http/api";
import { cookies } from "next/headers";
import FormEditCategory from "./FormEditCategory";
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
};

const CreateCategory = async ({ searchParams }: Params) => {
  const category = await getCategory(searchParams?.categoryId);

  return (
    <section>
      <CardStyle>
        <FormEditCategory category={category} />
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
