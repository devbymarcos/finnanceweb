"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useEffect, useRef } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.data.status) {
      setAlert({
        active: true,
        message: state.data.message,
        type: state.data.type,
      });
      formRef.current?.reset();
    }
  }, [state]);
  return (
    <>
      <Alert {...alert} />
      <form ref={formRef} action={formAction}>
        <div className="mb-4">
          <Label>Nome</Label>
          <Input
            type="text"
            name="name"
            defaultValue=""
            className="border-base-secondary"
          />
          <p className="text-red-500 text-[11px] ">{state?.data.errors.name}</p>
        </div>
        <div className="mb-4">
          <Label>Descrição</Label>
          <Input
            type="text"
            name="description"
            defaultValue=""
            className="border-base-secondary"
          />
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
