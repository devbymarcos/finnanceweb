"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useEffect } from "react";
import Submit from "@/components/form/Submit";
import { PropsCategoryType, InitialState } from "./types";
import { useFormState } from "react-dom";
import { updateCategory } from "./actions";
import { Switch } from "@/components/ui/switch";

const initialState: InitialState = {
  data: {
    errors: {
      name: "",
      description: "",
      type: "",
    },
    message: "",
    status: false,
    type: "error",
  },
};

const FormEditCategory = ({ category }: PropsCategoryType) => {
  const [state, formAction] = useFormState(updateCategory, initialState);
  const { alert, setAlert } = useAlert();

  const deleteAlert = () => {
    const confirmed = confirm(
      "Você marcou este registro para ser removido. Tem Certeza?"
    );
    if (!confirmed) {
      const inputElem: HTMLElement | null = document.getElementById("delete");
      if (inputElem instanceof HTMLInputElement) {
        inputElem.checked = false;
      }
    }
  };

  useEffect(() => {
    if (state.data.status) {
      setAlert({
        active: true,
        message: state.data.message,
        type: state.data.type,
      });
    }
  }, [state]);
  return (
    <>
      <Alert {...alert} />

      <form action={formAction}>
        <input type="hidden" value={category.data[0].id} name="id" />
        <div className="mb-4">
          <Label>Nome</Label>
          <Input
            type="text"
            name="name"
            defaultValue={category.data[0].name}
            className="border-base-secondary"
          />
          <p className="text-red-500 text-[11px] ">{state?.data.errors.name}</p>
        </div>
        <div className="mb-4">
          <Label>Descrição</Label>
          <Input
            type="text"
            name="description"
            className="border-base-secondary"
            defaultValue={category.data[0].description}
          />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.description}
          </p>
        </div>
        <div className="mb-4">
          <Label>Tipo</Label>
          <Select name="type" defaultValue={category.data[0].type}>
            <SelectTrigger className=" border-base-secondary ">
              <SelectValue placeholder="Escolhar.." />
            </SelectTrigger>
            <SelectContent className="border-base-secondary">
              <SelectItem value="expense">Despesas</SelectItem>
              <SelectItem value="income">Receitas</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-red-500 text-[11px] ">{state?.data.errors.type}</p>
        </div>
        <div className="my-3 grid grid-cols-1 md:grid-cols-4 gap-5">
          <Submit text="Salvar" />
          <div className="flex items-center mb-4 col-start-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="rmove"
                name="delete"
                value="true"
                onCheckedChange={deleteAlert}
                className="data-[state=checked]:bg-base-secondary "
              />
              <Label htmlFor="rmove">Remover </Label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormEditCategory;
