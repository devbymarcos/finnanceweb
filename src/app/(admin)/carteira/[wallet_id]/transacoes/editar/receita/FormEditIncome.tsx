"use client";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Submit from "@/components/form/Submit";
import { useFormState } from "react-dom";
import { UpdateTransaction } from "../actions";
import { Formtransaction, InitialState } from "../types";
import { Alert, useAlert } from "@/components/alert/Alert";
import { currency } from "remask";
import { useState } from "react";
import { formattedDateInput } from "@/functions/helpers";
import InputMask from "@/components/form/InputMask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const initialState: InitialState = {
  data: {
    errors: {
      description: "",
      price: "",
      due_at: "",
      type: "",
      wallet_id: "",
      category_id: "",
      pay: "",
    },
    message: "",
    status: false,
    type: "error",
  },
};

const FormEditIncome = ({ wallet, category, invoice }: Formtransaction) => {
  const [state, formAction] = useFormState(UpdateTransaction, initialState);
  const { alert, setAlert } = useAlert();
  const [priceMask, setPriceMask] = useState("0,00");

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
    setPriceMask(
      currency.mask({
        locale: "pt-BR",
        currency: "BRL",
        value: invoice.data[0].price,
      })
    );
  }, []);

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
      <h1 className="text-2xl font-bold dark:text-base-white">Receita</h1>
      <form action={formAction}>
        <input type="hidden" value={invoice.data[0].id} name="id" />
        <input type="hidden" value={wallet.wallet_id} name="wallet_id" />
        <input type="hidden" value="income" name="type" />
        <div className="mb-3">
          <Label>Valor</Label>
          <InputMask
            type="text"
            name="price"
            onChange={onChange}
            value={priceMask}
          />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.price}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="mb-3 ">
            <Label>Descrição</Label>
            <Input
              type="text"
              name="description"
              defaultValue={invoice.data[0].description}
              className="border-base-secondary"
            />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.description}
            </p>
          </div>
          <div className="mb-3">
            <Label>Data</Label>
            <Input
              type="date"
              name="due_at"
              defaultValue={formattedDateInput(invoice.data[0].due_at)}
              className="border-base-secondary"
            />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.due_at}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-4">
          <div className="mb-3">
            <Label>Categoria</Label>
            <Select
              name="category_id"
              defaultValue={String(invoice.data[0].category_id)}
            >
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
          <div className="mb-3">
            <Label>Pagamento status</Label>
            <Select name="pay" defaultValue={invoice.data[0].pay}>
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
          <div className="flex items-center mb-4 col-start-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="rmove"
                name="delete"
                value="true"
                onCheckedChange={deleteAlert}
                className="data-[state=checked]:bg-base-secondary "
              />
              <Label htmlFor="rmove">Remover </Label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormEditIncome;
