"use client";
import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Submit from "@/components/form/Submit";
import { useFormState } from "react-dom";
import { postTransaction } from "./actions";
import { typesTransaction, typeFormTransactionProps } from "./types";
import { Alert, useAlert } from "@/components/alert/Alert";
import { currency } from "remask";
import { useState } from "react";
import InputMask from "@/components/form/InputMask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { maskUiFormTransaction } from "@/functions/mask-ui-form-transaction";

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
  const [priceMask, setPriceMask] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    setPriceMask(maskUiFormTransaction(inputElement.value));
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
            placeholder="R$ 0,00"
          />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.price}
          </p>
        </div>
        <div className="mb-3 md:col-span-3">
          <Label>Descrição</Label>
          <Input
            type="text"
            name="description"
            className="border-base-secondary"
          />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <Label>Data</Label>
            <Input
              type="date"
              name="due_at"
              className="border-base-secondary"
            />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.due_at}
            </p>
          </div>
          <div className="mb-3">
            <Label>Categoria</Label>
            <Select name="category_id">
              <SelectTrigger className=" border-base-secondary ">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent className="border-base-secondary">
                {category.map((item: any, i) => {
                  return (
                    <SelectItem key={i} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
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
              <SelectTrigger className=" border-base-secondary ">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent className="border-base-secondary">
                <SelectItem value="single">Única</SelectItem>
                <SelectItem value="month">Mês</SelectItem>
              </SelectContent>
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
              className="border-base-secondary"
            />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.installments}
            </p>
          </div>
          <div className="mb-3">
            <Label>Pagamento status </Label>
            <Select name="pay">
              <SelectTrigger className=" border-base-secondary ">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent className="border-base-secondary">
                <SelectItem value="paid">Pago</SelectItem>
                <SelectItem value="unpaid">Não pago</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.pay}
            </p>
          </div>
        </div>

        <div className="my-3 grid grid-cols-1 md:grid-cols-4 gap-5">
          <Submit text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default FormTransaction;
