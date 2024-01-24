"use client";
import { useEffect } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Submit from "@/components/form/Submit";
import { useFormState } from "react-dom";
import { postTransaction } from "./actions";
import { typesTransaction } from "./types";
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
type Props = {
  wallet: {
    data: Array<{
      id: number;
      user_id: number;
      name: string;
      description: string;
      option_wallet: number;
      created_at: string;
      updated_at: string;
    }>;
  };
  category: {
    data: Array<{
      id: number;
      user_id: number;
      name: string;
      created_at: string;
      updated_at: string;
    }>;
  };
};
const FormTransaction = ({ wallet, category }: Props) => {
  const [state, formAction] = useFormState(postTransaction, initialState);
  const { alert, setAlert } = useAlert();
  const [priceMask, setPriceMask] = useState("0");

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
    }
  }, [state]);

  return (
    <>
      <Alert {...alert} />
      <form action={formAction}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mb-3 md:col-span-3">
            <Label>Descrição</Label>
            <Input type="text" name="description" />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.description}
            </p>
          </div>
          <div className="mb-3">
            <Label>Valor</Label>
            <Input
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <Label>Data</Label>
            <Input type="date" name="due_at" />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.due_at}
            </p>
          </div>
          <div className="mb-3">
            <Label>Tipo</Label>
            <Select name="type" placeholder="Escolha...">
              <option value="">Escolha...</option>
              <option value="income">Receitas</option>
              <option value="expense">Despesas</option>
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.type}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-3">
            <Label>Carteira</Label>
            <Select name="wallet_id">
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
              {state?.data.errors.wallet_id}
            </p>
          </div>
          <div className="mb-3">
            <Label>Categoria</Label>
            <Select name="category_id">
              <option value="">Escolha...</option>
              {category.data.map((item: any) => {
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
        <div className="mb-3">
          <Submit text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default FormTransaction;
