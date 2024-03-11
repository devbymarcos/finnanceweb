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
      className="rounded-2xl w-full py-3 px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black border border-base-secondary"
      value={value}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
};

const FormTransaction = ({ wallet, category }: typeFormTransactionProps) => {
  const [state, formAction] = useFormState(postTransaction, initialState);
  const { alert, setAlert } = useAlert();
  const [categoryInput, setCategoryIntpu] = useState("income");
  const [priceMask, setPriceMask] = useState("0");
  const formRef = useRef<HTMLFormElement>(null);

  function changeSelectTypeCategory(e: any) {
    if (e.target.id === "income") {
      setCategoryIntpu("income");
    } else {
      setCategoryIntpu("expense");
    }
  }

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
        <input type="hidden" name="wallet_id" value={wallet.wallet_id} />
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div>
            <div className="flex items-center mb-4">
              <input
                id="income"
                type="radio"
                value="income"
                name="type"
                className="w-5 h-5 cursor-pointer "
                onClick={changeSelectTypeCategory}
              />
              <label
                htmlFor="income"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                Receitas
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="expense"
                type="radio"
                value="expense"
                name="type"
                className="w-5 h-5 cursor-pointer"
                onClick={changeSelectTypeCategory}
              />
              <label
                htmlFor="expense"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                Despesas
              </label>
            </div>
          </div>

          <div className="mb-3">
            <Label>Categoria</Label>
            <Select name="category_id">
              <option value="">Escolha...</option>
              {category.data.map((item: any) => {
                if (item.type != categoryInput) return null;
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
            <Label>Pagamento status</Label>
            <Select name="pay">
              <option value="">Escolha...</option>
              <option value="paid">Pago</option>
              <option value="unpaid">Não pago</option>
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.pay}
            </p>
          </div>
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

        <div className="mb-3">
          <Submit text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default FormTransaction;
