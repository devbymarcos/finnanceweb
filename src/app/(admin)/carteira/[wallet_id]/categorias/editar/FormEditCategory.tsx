"use client";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useEffect } from "react";
import Submit from "@/components/form/Submit";
import { PropsCategoryType, InitialState } from "./types";
import { useFormState } from "react-dom";
import { updateCategory } from "./actions";
import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import { Plus } from "lucide-react";

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
        <div className="mb-12">
          <Label>Nome</Label>
          <Input type="text" name="name" defaultValue={category.data[0].name} />
          <p className="text-red-500 text-[11px] ">{state?.data.errors.name}</p>
        </div>
        <div className="mb-12">
          <Label>Descrição</Label>
          <Input
            type="text"
            name="description"
            defaultValue={category.data[0].description}
          />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.description}
          </p>
        </div>
        <div className="mb-12">
          <Label>Tipo</Label>
          <Select name="type" defaultValue={category.data[0].type}>
            <option value="">Escolha...</option>
            <option value="expense">Despesas</option>
            <option value="income">Receitas</option>
          </Select>
          <p className="text-red-500 text-[11px] ">{state?.data.errors.type}</p>
        </div>
        <div className="my-3 grid grid-cols-1 md:grid-cols-4 gap-5">
          <Submit text="Salvar" />
          <div className="flex items-center mb-4 col-start-4">
            <input
              id="delete"
              type="checkbox"
              name="delete"
              className="w-5 h-5 cursor-pointer "
              defaultValue="true"
              onChange={deleteAlert}
            />

            <label
              htmlFor="delete"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              Apagar este registro
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormEditCategory;
