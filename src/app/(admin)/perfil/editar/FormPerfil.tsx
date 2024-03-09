"use client";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useEffect } from "react";
import { InitialState, typeUserProps } from "./types";
import Submit from "@/components/form/Submit";
import { useFormState } from "react-dom";
import { updateUser } from "./actions";

const initialState: InitialState = {
  data: {
    errors: {
      name: "",
      email: "",
    },
    message: "",
    status: false,
    type: "error",
  },
};

const FormPerfil = ({ user }: typeUserProps) => {
  const [state, formAction] = useFormState(updateUser, initialState);
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
        <div className="mb-12">
          <Label>Nome</Label>
          <Input type="text" name="name" defaultValue={`2`} />
          <p className="text-red-500 text-[11px] ">{state?.data.errors.name}</p>
        </div>
        <div className="mb-12">
          <Label>Email</Label>
          <Input type="text" name="description" defaultValue={`2`} />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.email}
          </p>
        </div>

        <div className="my-3 grid grid-cols-1 md:grid-cols-4 gap-5">
          <Submit text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default FormPerfil;
