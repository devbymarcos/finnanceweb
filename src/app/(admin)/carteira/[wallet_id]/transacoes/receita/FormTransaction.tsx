"use client";
import { useEffect, useRef } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Submit from "@/components/form/Submit";
import { useFormState } from "react-dom";
import { postTransaction } from "./actions";
import { typesTransaction, typeFormTransactionProps } from "./types";
import { Alert, useAlert } from "@/components/alert/Alert";
import { currency } from "remask";
import { useState } from "react";
import InputMask from "@/components/form/InputMask";

const initialState: typesTransaction = {
  data: {
    errors: {
      description: "",
      price: "",
      due_at: "",
      type: "",
      wallet_id: "",
      category_id: "",
      pay: "",
      repeat_when: "",
      installments: "",
    },
    message: "",
    status: false,
    type: "error",
  },
};

const FormTransaction = ({ wallet, category }: typeFormTransactionProps) => {
  const [state, formAction] = useFormState(postTransaction, initialState);
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
      setPriceMask("R$ 0,00");
    }
  }, [state]);

  return (
    <>
      <Alert {...alert} />
      <h2 className="text-xl font-bold">Crie uma receita</h2>
      <form ref={formRef} action={formAction}>
        <input type="hidden" name="wallet_id" value={wallet.wallet_id} />
        <input type="hidden" value="income" name="type" />

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
            <Label>Categoria</Label>
            <Select name="category_id">
              <option value="">Escolha...</option>
              {category.map((item: any) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.category_id}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-3">
            <Label>Repetir ? </Label>
            <Select name="repeat_when">
              <option value="">Escolha...</option>
              <option value="single">Única</option>
              <option value="month">Mês</option>
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.repeat_when}
            </p>
          </div>
          <div className="mb-3">
            <Label>Repetições</Label>
            <Input
              type="number"
              placeholder="Insira a quantidade de repetições ex: 1"
              name="installments"
            />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.installments}
            </p>
          </div>
        </div>

        <div className="my-10 grid grid-col-1 md:grid-cols-3">
          <Submit text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default FormTransaction;
