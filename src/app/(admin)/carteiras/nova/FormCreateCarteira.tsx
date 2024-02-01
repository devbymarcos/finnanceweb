"use client";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useEffect } from "react";
import Submit from "@/components/form/Submit";
import { InitialState } from "./types";
import { useFormState } from "react-dom";
import { createWallet } from "./actions";

const initialState: InitialState = {
  data: {
    errors: {
      name: "",
      description: "",
    },
    message: "",
    status: false,
    type: "error",
  },
};

const FormCreateCarteira = () => {
  const [state, formAction] = useFormState(createWallet, initialState);
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
        <div className="mb-12">
          <Label>Nome</Label>
          <Input type="text" name="name" defaultValue="" />
          <p className="text-red-500 text-[11px] ">{state?.data.errors.name}</p>
        </div>
        <div className="mb-12">
          <Label>Descrição</Label>
          <Input type="text" name="description" defaultValue="" />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.description}
          </p>
        </div>

        <div className="my-3 grid grid-cols-1 md:grid-cols-4 gap-5">
          <Submit text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default FormCreateCarteira;
