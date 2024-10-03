"use client";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useEffect } from "react";
import Submit from "@/components/form/Submit";
import { InitialState } from "./types";
import { useFormState } from "react-dom";
import { saveCategory } from "./actions";
import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import { ArrowLeft } from "lucide-react";

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

interface formCagegoryPropsType {
  walletId: string;
}
const FormCreateCategory = ({ walletId }: formCagegoryPropsType) => {
  const [state, formAction] = useFormState(saveCategory, initialState);
  const { alert, setAlert } = useAlert();

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
        <input type="hidden" name="wallet_id" value={walletId} />
        <div className="mb-7">
          <Label>Nome</Label>
          <Input type="text" name="name" />
          <p className="text-red-500 text-[11px] ">{state?.data.errors.name}</p>
        </div>
        <div className="mb-7">
          <Label>Descrição</Label>
          <Input type="text" name="description" />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.description}
          </p>
        </div>
        <div className="mb-7">
          <Label>Tipo</Label>
          <Select name="type">
            <option value="">Escolha...</option>
            <option value="expense">Despesas</option>
            <option value="income">Receitas</option>
          </Select>
          <p className="text-red-500 text-[11px] ">{state?.data.errors.type}</p>
        </div>
        <div className="my-3 grid grid-cols-1 md:grid-cols-4 gap-5">
          <Submit text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default FormCreateCategory;
