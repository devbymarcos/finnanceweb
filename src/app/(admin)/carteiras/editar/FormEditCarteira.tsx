"use client";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useEffect } from "react";
import Submit from "@/components/form/Submit";
import { PropsWalletType, InitialState } from "./types";
import { useFormState } from "react-dom";
import { updateWallet } from "./actions";

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

const FormEditCarteira = ({ wallet }: PropsWalletType) => {
  const [state, formAction] = useFormState(updateWallet, initialState);
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
        <input type="hidden" value={wallet.data[0].id} name="id" />
        <div className="mb-12">
          <Label>Nome</Label>
          <Input type="text" name="name" defaultValue={wallet.data[0].name} />
          <p className="text-red-500 text-[11px] ">{state?.data.errors.name}</p>
        </div>
        <div className="mb-12">
          <Label>Descrição</Label>
          <Input
            type="text"
            name="description"
            defaultValue={wallet.data[0].description}
          />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.description}
          </p>
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

export default FormEditCarteira;
