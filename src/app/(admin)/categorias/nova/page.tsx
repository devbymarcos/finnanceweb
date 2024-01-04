import CardStyle from "@/components/cards/CardStyle";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import React from "react";
import Submit from "@/components/form/Submit";

const CreateCategory = () => {
  return (
    <section>
      <CardStyle>
        <form>
          <div className="mb-12">
            <Label>Nome</Label>
            <Input type="text" name="name" />
          </div>
          <div className="mb-12">
            <Label>Descrição</Label>
            <Input type="text" name="description" />
          </div>
          <div className="mb-12">
            <Label>Tipo</Label>
            <Select name="type">
              <option>Escolhar...</option>
              <option value="expense">Receitas</option>
              <option value="expense">Despesas</option>
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
