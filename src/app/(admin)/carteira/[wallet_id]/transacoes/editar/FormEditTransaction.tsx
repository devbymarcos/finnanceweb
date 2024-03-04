"use client";
import { useEffect } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Submit from "@/components/form/Submit";
import { useFormState } from "react-dom";
import { UpdateTransaction } from "./actions";
import { InputMask, Formtransaction, InitialState } from "./types";
import { Alert, useAlert } from "@/components/alert/Alert";
import { currency } from "remask";
import { useState } from "react";
import { formattedDateInput } from "@/functions/helpers";

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

const InputMask = ({ type, value, name, required, onChange }: InputMask) => {
  return (
    <input
      type={type}
      className="rounded-md w-full py-3 px-2 outline-none  bg-base-white dark:text-base-white text-base-black dark:bg-base-black border border-base-secondary"
      value={value}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
};

const FormEditTransaction = ({
  wallet,
  category,
  invoice,
}: Formtransaction) => {
  const [state, formAction] = useFormState(UpdateTransaction, initialState);
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
      <form action={formAction}>
        <input type="hidden" value={invoice.data[0].id} name="id" />
        <div className="grid grid-cols-1 ">
          <div className="mb-3 ">
            <Label>Descrição</Label>
            <Input
              type="text"
              name="description"
              defaultValue={invoice.data[0].description}
            />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <Label>Data</Label>
            <Input
              type="date"
              name="due_at"
              defaultValue={formattedDateInput(invoice.data[0].due_at)}
            />
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.due_at}
            </p>
          </div>
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="flex items-center mb-4">
            <input
              id="income"
              type="radio"
              value="income"
              name="type"
              className="w-5 h-5 cursor-pointer "
              defaultChecked={invoice.data[0].type === "income" && true}
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
              defaultChecked={invoice.data[0].type === "expense" && true}
            />
            <label
              htmlFor="expense"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              Despesas
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-3">
            <Label>Carteira</Label>
            <Select name="wallet_id" defaultValue={invoice.data[0].wallet_id}>
              <option>Escolha...</option>
              {wallet.data.map((item: any) => {
                return (
                  <option value={item.id} key={item.id}>
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
            <Select
              name="category_id"
              defaultValue={invoice.data[0].category_id}
            >
              <option>Escolha...</option>
              {category.data.map((item: any) => {
                return (
                  <option value={item.id} key={item.id}>
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
            <Select name="pay" defaultValue={invoice.data[0].pay}>
              <option>Escolha...</option>
              <option value="paid">Pago</option>
              <option value="unpaid">Não pago</option>
            </Select>
            <p className="text-red-500 text-[11px] ">
              {state?.data.errors.pay}
            </p>
          </div>
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

export default FormEditTransaction;
