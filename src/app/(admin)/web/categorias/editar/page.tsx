import CardStyle from "@/components/cards/CardStyle";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import React from "react";
import Submit from "@/components/form/Submit";
import { getCategoryIdApi } from "@/http/api";
import { cookies } from "next/headers";
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
  console.log("TCL: CreateCategory -> category", category);

  return (
    <section>
      <CardStyle>
        <form>
          <div className="mb-12">
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              defaultValue={category.data[0].name}
            />
          </div>
          <div className="mb-12">
            <Label>Descrição</Label>
            <Input
              type="text"
              name="description"
              defaultValue={category.data[0].description}
            />
          </div>
          <div className="mb-12">
            <Label>Tipo</Label>
            <Select name="type">
              <option>Escolhar...</option>
              <option
                selected={category.data[0].type == "expense" && true}
                value="expense"
              >
                Despesas
              </option>
              <option
                selected={category.data[0].type == "income" && true}
                value="income"
              >
                Receitas
              </option>
            </Select>
          </div>
          <div className="mb-12 max-w-[250px]">
            <Submit text="Salvar" />
          </div>
        </form>
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
