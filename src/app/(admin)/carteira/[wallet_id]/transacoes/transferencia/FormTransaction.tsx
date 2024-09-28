"use client";
import { useEffect, useRef } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Submit from "@/components/form/Submit";
import { useFormState } from "react-dom";
import { postTranfer } from "./actions";
import { typesTransaction } from "./types";
import { Alert, useAlert } from "@/components/alert/Alert";
import { currency } from "remask";
import { useState } from "react";
import { typeFormTransactionProps } from "./types";

const initialState: typesTransaction = {
  data: {
    errors: {
      description: "",
      price: "",
      due_at: "",
      walletIdIn: "",
      walletIdOut: "",
      categoryIdIn: "",
      categoryIdOut: "",
    },
    message: "",
    status: false,
    type: "error",
  },
};

interface InputMask {
  type: string;
  value?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  onChange?: (e: any) => void;
  defaultValue?: string;
}

const InputMask = ({ type, value, name, required, onChange }: InputMask) => {
  return (
    <input
      type={type}
      className="rounded-md w-full py-3 px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black  font-bold text-4xl"
      value={value}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
};

const FormTransaction = ({
  wallet,
  category,
  walletCurrent,
}: typeFormTransactionProps) => {
  const [state, formAction] = useFormState(postTranfer, initialState);
  const { alert, setAlert } = useAlert();
  const [priceMask, setPriceMask] = useState("R$ 0,00");
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    const originalValue = currency.unmask({
      locale: "pt-BR",
      currency: "BRL",
      value: inputElement.value,
    });
    const maskedValue = currency.mask({
      locale: "pt-BR",
      currency: "BRL",
      value: originalValue,
    });

    setPriceMask(maskedValue);
  };

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
        <input type="hidden" name="walletIdOut" value={walletCurrent} />
        <div className="mb-3">
          <Label>Valor</Label>
          <InputMask
            type="text"
            name="price"
            value={priceMask}
            onChange={onChange}
          />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.price}
          </p>
        </div>
        <div className="mb-3 md:col-span-3">
          <Label>Descrição</Label>
          <Input type="text" name="description" />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <Label>Data</Label>
            <Input type="date" name="due_at" />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.due_at}
            </p>
          </div>
          <div className="mb-3">
            <Label>Qual categoria para despesa</Label>
            <Select name="categoryIdOut">
              <option value="">Escolha...</option>
              {category.data
                .filter((item: any) => item.type === "expense")
                .map((item: any) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.categoryIdOut}
            </p>
          </div>
        </div>

        <h2 className="font-bold my-10">
          Dados para a carteira que vai receber o pagamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <Label>Carteira para receber</Label>
            <Select name="walletIdIn">
              <option value="">Escolha...</option>
              {wallet.data.map((item: any) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.walletIdIn}
            </p>
          </div>
          <div className="mb-3">
            <Label>Qual categoria para receita</Label>
            <Select name="categoryIdIn">
              <option value="">Escolha...</option>
              {category.data
                .filter((item: any) => item.type === "income")
                .map((item: any) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.categoryIdIn}
            </p>
          </div>
        </div>

        <div className=" my-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <Submit text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default FormTransaction;
